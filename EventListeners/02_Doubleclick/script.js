"use strict";

const card = document.querySelector(".card");

card.addEventListener("dblclick", function () {
  card.style.transform = "rotate(45deg)";
});

card.addEventListener("click", function () {
  card.style.transform = "initial";
});
