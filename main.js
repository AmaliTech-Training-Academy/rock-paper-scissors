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
let score = document.querySelector(".header__value");

setScore((state = "init"), (tar = score));
// Loop through Each Game Item
gameItemsCont.forEach((e) => {
  // Listen For Click Event
  e.addEventListener("click", function () {
    // Store The Clicked Item in Variable
    tempoV = e;
    // Trigger Game Fuction
    swipe(
      (flag = stateFlag),
      (arr = gameItemsCont),
      (slim = tempoV),
      (tmpArr = tempoArr)
    );
     // Swipe Game State Flag
    stateFlag = true;
    // Play Again
  });
})

// Stage 1 to 2 trigger Function
function swipe(flag, arr, slim, tmpArr) {
  // Stage 2 If TRUE
  if (flag === true) {
  }
    
    
    
    
    
    
    
    
