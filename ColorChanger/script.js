"use strict";
const btn = document.querySelector(".btn");
const colorBtn = document.querySelector(".colorBtn");
const sound = document.querySelector(".sound");
const randomColor = function () {
  const colorCodes = "0123456789abcdef";
  let hashCode = "#";

  for (let i = 0; i < 6; i++) {
    hashCode = hashCode + colorCodes[Math.trunc(Math.random() * 16)];
  }
  return hashCode;
};
const changeBgColor = function () {
  const rndColor = randomColor();
  document.body.style.backgroundColor = rndColor;
  colorBtn.textContent = rndColor;
  sound.play();
};
btn.addEventListener("click", changeBgColor);
colorBtn.addEventListener("click", changeBgColor);
