"use strict";

const home = document.querySelector(".home");
const college = document.querySelector(".college");
const office = document.querySelector(".office");

home.addEventListener("mouseover", function () {
  home.textContent = "🏡 Now, You are at your Home";
});

college.addEventListener("mouseover", function () {
  college.textContent = "🏫 Now, You are at your College";
});

office.addEventListener("mouseover", function () {
  office.textContent = "🏢 Now, You are at your Office";
});
