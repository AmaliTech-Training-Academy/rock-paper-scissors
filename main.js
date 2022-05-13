document.querySelector(".rules-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".rules-popup")
    .classList.toggle("rules-popup--active");
  document.querySelector(".overlay").classList.toggle("overlay--active");
});
document.querySelector(".close-icon").addEventListener("click", () => {
  document
    .querySelector(".rules-popup")
    .classList.remove("rules-popup--active");
  document.querySelector(".overlay").classList.toggle("overlay--active");
});

let gameItemsCont = Array.from(
  document.querySelectorAll("div[class^='game-body__circle-container'")
);
let tempoV;
let tempoArr = [];
let stateFlag = false;
