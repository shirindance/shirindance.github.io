from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
import re


# =========================================================
# CONFIGURAZIONE
# =========================================================

ROOT = Path(__file__).resolve().parent.parent

VIDEO_FILES_DIR = ROOT / "gallery" / "video"
OUTPUT_DIR = ROOT / "images" / "video"

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


# =========================================================
# TROVA GLI ID YOUTUBE NEI FILE MARKDOWN
# =========================================================

def trova_video():

    video_ids = []

    for file_md in VIDEO_FILES_DIR.glob("*.md"):

        print(f"\nLeggo: {file_md.name}")

        testo = file_md.read_text(
            encoding="utf-8"
        )

        ids = re.findall(
            r'^\s*-\s*id:\s*["\']([^"\']+)["\']\s*$',
            testo,
            flags=re.MULTILINE
        )

        for video_id in ids:

            if video_id not in video_ids:
                video_ids.append(video_id)

    return video_ids


# =========================================================
# SCARICA UNA IMMAGINE
# =========================================================

def scarica(url):

    request = Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0"
        }
    )

    with urlopen(
        request,
        timeout=15
    ) as response:

        content_type = response.headers.get(
            "Content-Type",
            ""
        )

        if not content_type.startswith("image/"):
            return None

        return response.read()


# =========================================================
# CONTROLLA CHE SIA UNA VERA COPERTINA
# =========================================================

def immagine_valida(data):

    # Le immagini "placeholder" restituite da YouTube
    # quando maxres non esiste sono generalmente molto piccole.
    return len(data) > 10_000


# =========================================================
# SCARICA COPERTINA VIDEO
# =========================================================

def scarica_copertina(video_id):

    destinazione = (
        OUTPUT_DIR /
        f"youtube-{video_id}.jpg"
    )


    # Se esiste già, non la tocchiamo
    if destinazione.exists():

        print(
            f"  ✓ già presente: {destinazione.name}"
        )

        return


    versioni = [

        (
            "maxresdefault",
            f"https://i.ytimg.com/vi/{video_id}/maxresdefault.jpg"
        ),

        (
            "hqdefault",
            f"https://i.ytimg.com/vi/{video_id}/hqdefault.jpg"
        )

    ]


    for nome_versione, url in versioni:

        try:

            data = scarica(url)

            if not immagine_valida(data):

                print(
                    f"  - {nome_versione} non disponibile"
                )

                continue


            destinazione.write_bytes(data)

            print(
                f"  ✓ scaricata {nome_versione}: "
                f"{destinazione.name}"
            )

            return


        except HTTPError:

            print(
                f"  - {nome_versione} non disponibile"
            )


        except URLError as error:

            print(
                f"  ! errore di rete: {error}"
            )

            return


        except Exception as error:

            print(
                f"  ! errore: {error}"
            )

            return


    print(
        f"  ✗ nessuna copertina trovata per {video_id}"
    )


# =========================================================
# AVVIO
# =========================================================

def main():

    print(
        "Cerco i video nelle collection..."
    )

    video_ids = trova_video()


    if not video_ids:

        print(
            "\nNessun ID YouTube trovato."
        )

        return


    print(
        f"\nTrovati {len(video_ids)} video."
    )


    for video_id in video_ids:

        print(
            f"\n{video_id}"
        )

        scarica_copertina(
            video_id
        )


    print(
        "\nOperazione completata."
    )


if __name__ == "__main__":
    main()