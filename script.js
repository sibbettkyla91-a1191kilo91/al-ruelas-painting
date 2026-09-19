const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    if (form.hasAttribute("data-local-only")) {
      event.preventDefault();
      const note = document.querySelector(".form-status");
      if (note) {
        note.textContent = "Template mode: this form is not connected yet. Add your email or enable Netlify Forms — see README.";
      }
    }
  });
}
