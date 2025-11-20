document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  const headerH = header ? header.offsetHeight : 0;
  const footerH = footer ? footer.offsetHeight : 0;

  document.documentElement.style.setProperty("--header-h", headerH + "px");
  document.documentElement.style.setProperty("--footer-h", footerH + "px");
});
