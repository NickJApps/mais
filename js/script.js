const btn = document.querySelector(".to-top");
const openButtons = document.querySelectorAll(".openModal");
const closeButtons = document.querySelectorAll(".close");
const modals = document.querySelectorAll(".modal");
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});


btn.addEventListener("click", () => {
  document.getElementById("top").scrollIntoView({ behavior: "smooth" });
});


// Open modal

openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.classList.add("show");
    document.body.classList.add("modal-open");
  });
});


// Close modal
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").classList.remove("show");
    document.body.classList.remove("modal-open");
  });
});

// Close modal window click
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
});

/* Toggle menu */

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});