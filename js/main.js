"use strict";

const buttons = document.querySelectorAll(".features__button");
const sections = document.querySelectorAll(".features__content");

function colorChange() {
  buttons.forEach(function (element) {
    element.classList.remove("active-color");
  });
  sections.forEach(function (sect) {
    sect.classList.add("hide");
  });
  this.classList.add("active-color");
  document.getElementById(`${this.dataset.button}`).classList.remove("hide");
}

buttons.forEach(function (element) {
  element.addEventListener("click", colorChange);
});
