"use strict";
const display = document.querySelector(".display");
const typing = document.querySelector(".typing");

typing.onkeypress = function (e) {
  display.textContent = "You Pressed : " + e.key;
};
