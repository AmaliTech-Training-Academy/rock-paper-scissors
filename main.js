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
