"use strict";
const display = document.querySelector(".display");

const typing = document.querySelector(".typing");

typing.addEventListener("keydown", function (e) {
  display.style.backgroundColor = "#ffff21";
  display.textContent = "You pressed : " + e.key;
});

typing.addEventListener("keyup", function (e) {
  display.style.backgroundColor = "#50c800";
  display.textContent = "You released : " + e.key;
});
