const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const serviceOptions = document.querySelectorAll("[data-service-value]");
const bookingSummary = document.querySelector("[data-booking-summary] strong");
const documentsModal = document.querySelector("[data-documents-modal]");
const documentsOpen = document.querySelector("[data-documents-open]");
const documentsClose = document.querySelectorAll("[data-documents-close]");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

serviceOptions.forEach((option) => {
  option.addEventListener("click", () => {
    serviceOptions.forEach((item) => item.classList.remove("active"));
    option.classList.add("active");
    bookingSummary.textContent = option.dataset.serviceValue;
  });
});

function setDocumentsOpen(isOpen) {
  documentsModal.classList.toggle("open", isOpen);
  documentsModal.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("menu-open", isOpen);
}

documentsOpen.addEventListener("click", () => setDocumentsOpen(true));

documentsClose.forEach((item) => {
  item.addEventListener("click", () => setDocumentsOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && documentsModal.classList.contains("open")) {
    setDocumentsOpen(false);
  }
});
