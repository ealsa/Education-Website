//  Change navbar on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// FAQ

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // Change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// HAMBURGER

const menu = document.querySelector(".nav__menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

openMenuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeMenuBtn.style.display = "inline-block";
  openMenuBtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "inline-block";
};

closeMenuBtn.addEventListener("click", closeNav);
