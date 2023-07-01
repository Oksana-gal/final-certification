"use strict";

const menuActiv = document.querySelector(".header__menu_activ");
const headerMenu = document.querySelector(".header__nav_right_menu");
function toggleMenu() {
  menuActiv.classList.toggle("hidden");
}
headerMenu.addEventListener("click", toggleMenu);

function showCard(cardNumber) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.classList.remove("active"));
  cards[cardNumber - 1].classList.add("active");
}

const rectangleEl = document.querySelector(".header-rectangle");
const rectangleMiniEl = document.querySelector(".header-rectangle__mini");
rectangleEl.addEventListener("mouseover", () => {
  rectangleMiniEl.style.display = "block";
});
rectangleEl.addEventListener("mouseout", () => {
  rectangleMiniEl.style.display = "none";
});

const password1 = document.querySelector(".form__input2");
const password2 = document.querySelector(".form__input3");
password2.addEventListener("input", () => {
  const color = password1.value === password2.value ? "green" : "red";
  [password1, password2].forEach(field => field.style.border = "2px solid " + color);
});

const stars = document.querySelectorAll(".star");
function setRating(value) {
  stars.forEach((star, index) => {
    if (index < value) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = parseInt(star.getAttribute("data-value"));
    setRating(value);
  });
});