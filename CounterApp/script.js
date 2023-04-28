"use strict";
const cValue = document.querySelector(".cValue");
const iBtn = document.querySelector(".iBtn");
const dBtn = document.querySelector(".dBtn");
const rBtn = document.querySelector(".rBtn");
let value = 0;
const incrementValue = function () {
  value++;
  cValue.textContent = value;
};
const decrementValue = function () {
  value--;
  cValue.textContent = value;
};
const resetValue = function () {
  value = 0;
  cValue.textContent = value;
};
iBtn.addEventListener("click", incrementValue);
dBtn.addEventListener("click", decrementValue);
rBtn.addEventListener("click", resetValue);
