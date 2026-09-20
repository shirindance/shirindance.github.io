from pathlib import Path
import re


# ============================================================
# CONFIGURAZIONE
# ============================================================

# Cartella principale del sito.
# Lo script si trova in /scripts, quindi parent.parent
# corrisponde alla root di shirindance.github.io.
ROOT = Path(__file__).resolve().parent.parent

# Cartella contenente i file YAML delle gallery.
DATA_FOLDER = ROOT / "_data"

# Estensioni considerate immagini.
IMAGE_EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif"
}


# ============================================================
# ORDINAMENTO NATURALE
# ============================================================

def natural_sort_key(text):
    """
    Ordina:
    1.jpg
    2.jpg
    10.jpg

    invece di:
    1.jpg
    10.jpg
    2.jpg
    """

    return [
        int(part) if part.isdigit() else part.lower()
        for part in re.split(r"(\d+)", text)
    ]


# ============================================================
# LETTURA DELLA CARTELLA DAL COMMENTO
# ============================================================

def get_folder_from_yaml(content):
    """
    Cerca una riga del tipo:

    # folder: /images/unica/bra/
    """

    match = re.search(
        r"^\s*#\s*folder:\s*(.+?)\s*$",
        content,
        re.MULTILINE
    )

    if not match:
        return None

    folder = match.group(1).strip()

    return folder


# ============================================================
# LETTURA DELLE VOCI ESISTENTI
# ============================================================

def get_existing_entries(content):
    """
    Divide il file YAML nelle singole voci che iniziano con:

    - image:

    Conserviamo il testo originale della voce,
    così title, description, link, link_text e
    qualsiasi altra informazione inserita a mano
    non vengono modificati.
    """

    entries = {}

    matches = list(
        re.finditer(
            r"(?m)^- image:\s*(.+?)\s*$",
            content
        )
    )

    for index, match in enumerate(matches):

        image_path = match.group(1).strip()

        start = match.start()

        if index + 1 < len(matches):
            end = matches[index + 1].start()
        else:
            end = len(content)

        block = content[start:end].strip()

        entries[image_path] = block

    return entries


# ============================================================
# CREA UNA NUOVA VOCE
# ============================================================

def create_entry(image_path):

    return (
        f"- image: {image_path}\n"
        f"  title:\n"
        f"  description:\n"
        f"  link:\n"
        f"  link_text:"
    )


# ============================================================
# SINCRONIZZA UNA GALLERY
# ============================================================

def sync_gallery(yaml_file):

    content = yaml_file.read_text(
        encoding="utf-8"
    )

    folder_web = get_folder_from_yaml(content)

    # Se non c'è # folder:, questo YAML
    # non è gestito dallo script.
    if not folder_web:
        return False

    # Trasforma:
    #
    # /images/unica/bra/
    #
    # nel percorso reale sul computer.
    relative_folder = folder_web.lstrip("/")

    physical_folder = ROOT / relative_folder

    print()
    print("=" * 60)
    print(f"GALLERY: {yaml_file.name}")
    print(f"CARTELLA: {folder_web}")

    # Sicurezza: se la cartella non esiste,
    # NON modifichiamo il YAML.
    if not physical_folder.exists():

        print("ERRORE: cartella non trovata.")
        print("Il file YAML non è stato modificato.")

        return False

    if not physical_folder.is_dir():

        print("ERRORE: il percorso non è una cartella.")
        print("Il file YAML non è stato modificato.")

        return False

    # --------------------------------------------------------
    # LEGGI LE IMMAGINI PRESENTI NELLA CARTELLA
    # --------------------------------------------------------

    files = []

    for file in physical_folder.iterdir():

        if not file.is_file():
            continue

        if file.suffix.lower() not in IMAGE_EXTENSIONS:
            continue

        files.append(file)

    files.sort(
        key=lambda f: natural_sort_key(f.name)
    )

    # --------------------------------------------------------
    # CREA I PERCORSI WEB
    # --------------------------------------------------------

    current_images = []

    for file in files:

        relative_path = file.relative_to(ROOT)

        web_path = "/" + relative_path.as_posix()

        current_images.append(web_path)

    # --------------------------------------------------------
    # LEGGI LE VOCI GIÀ PRESENTI NELLO YAML
    # --------------------------------------------------------

    existing_entries = get_existing_entries(content)

    existing_images = set(existing_entries.keys())

    current_set = set(current_images)

    # --------------------------------------------------------
    # CALCOLA AGGIUNTE E RIMOZIONI
    # --------------------------------------------------------

    added = [
        image
        for image in current_images
        if image not in existing_images
    ]

    removed = [
        image
        for image in existing_images
        if image not in current_set
    ]

    # --------------------------------------------------------
    # COSTRUISCI IL NUOVO YAML
    # --------------------------------------------------------

    blocks = []

    for image_path in current_images:

        # Se la foto esisteva già,
        # conserviamo ESATTAMENTE il suo blocco.
        if image_path in existing_entries:

            blocks.append(
                existing_entries[image_path]
            )

        # Altrimenti creiamo una nuova voce.
        else:

            blocks.append(
                create_entry(image_path)
            )

    # Manteniamo sempre il riferimento alla cartella.
    new_content = (
        f"# folder: {folder_web.rstrip('/')}/\n"
    )

    if blocks:

        new_content += "\n"
        new_content += "\n\n".join(blocks)
        new_content += "\n"

    # --------------------------------------------------------
    # SCRITTURA
    # --------------------------------------------------------

    # Scriviamo solo se qualcosa è effettivamente cambiato.
    if new_content != content:

        yaml_file.write_text(
            new_content,
            encoding="utf-8"
        )

    # --------------------------------------------------------
    # RISULTATO NEL TERMINALE
    # --------------------------------------------------------

    if added:

        print()
        print("AGGIUNTE:")

        for image in added:
            print(f"  + {Path(image).name}")

    if removed:

        print()
        print("ELIMINATE:")

        for image in removed:
            print(f"  - {Path(image).name}")

    if not added and not removed:

        print("Nessuna foto aggiunta o eliminata.")

    print(
        f"Totale fotografie: {len(current_images)}"
    )

    return True


# ============================================================
# AVVIO
# ============================================================

def main():

    print()
    print("SINCRONIZZAZIONE GALLERY")
    print("=" * 60)

    if not DATA_FOLDER.exists():

        print(
            "ERRORE: cartella _data non trovata."
        )

        return

    yaml_files = list(
        DATA_FOLDER.glob("*.yml")
    )

    yaml_files += list(
        DATA_FOLDER.glob("*.yaml")
    )

    yaml_files.sort(
        key=lambda f: natural_sort_key(f.name)
    )

    galleries_found = 0

    for yaml_file in yaml_files:

        content = yaml_file.read_text(
            encoding="utf-8"
        )

        if get_folder_from_yaml(content):

            galleries_found += 1
            sync_gallery(yaml_file)

    print()
    print("=" * 60)

    if galleries_found == 0:

        print(
            "Nessuna gallery con '# folder:' trovata."
        )

    else:

        print(
            f"Sincronizzazione completata. "
            f"Gallery controllate: {galleries_found}"
        )

    print("=" * 60)
    print()


if __name__ == "__main__":
    main()