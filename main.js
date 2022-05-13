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
 // Stage 1 if FALSE. And Go To Stage 2
  else {
    // Add Stage 2 Class to Element
    document.querySelector(".bg-triangle").classList.add("bg-triangle--s2");
    document
      .querySelector(".choosed-item--com__bg-circle")
      .classList.add("choosed-item--com__bg-circle--s2");
    // Separation of the elements of an array
    arr.filter((e) => {
      // Make Sure of Regarding Clicked Item
      if (slim !== arr[arr.indexOf(e)]) {
        // Add NotClicked Items
        tmpArr.push(e);
      }
    });
    // Choose Random Item
    let comItem = tmpArr[Math.floor(Math.random() * 2)];
    // Add Classes
    slim.classList.add("choosed-item--user");
    tmpArr.forEach((e) => {
      e.classList.add("unchoosed-item");
    });
   // Show Computer Choice
    setTimeout(() => {
      comItem.classList.remove("unchoosed-item");
      comItem.classList.add("choosed-item--com");
    }, 1000);
    setTimeout(() => {
      document
        .querySelector(".choosed-item--com__bg-circle")
        .classList.remove("choosed-item--com__bg-circle--s2");
    }, 1000);
    // Create Heading
    let headingUser = document.createElement("h3");
    let headingUserContent = document.createTextNode("You Picked");
    headingUser.classList.add("you-picked");
    headingUser.append(headingUserContent);
    slim.append(headingUser);
    let headingCom = document.createElement("h3");
    let headingComContent = document.createTextNode("The house Picked");
    headingCom.append(headingComContent);
    headingCom.classList.add("you-picked");
    comItem.append(headingCom);
    // Check for The Winning Item
    // Check for User Choice and Compare With Game Rules
    /* Game RULES
            Paper beats Rock beats Scissors beats Paper
        */
    if (slim.className.includes("paper")) {
      // If User's Choice is paper, then check for possibilities
      if (comItem.className.includes("rock")) {
        // WIN
        gameOver((state = "win"), (hUser1 = headingUser), (hCom1 = headingCom));
        setTimeout(() => {
          setScore((state = "win"), (tar = score));
        }, 1500);
        // Add Highlight Effect For Choosed Item
        setTimeout(() => {
          highlightEffect((slim = slim));
        }, 1250);
        } else {
        //LOSE
        gameOver(
          (state = "lose"),
          (hUser1 = headingUser),
          (hCom1 = headingCom)
        );
        setTimeout(() => {
          setScore((state = "lose"), (tar = score));
        }, 1500);
        // Add Highlight Effect For Choosed Item
        setTimeout(() => {
          highlightEffect((slim = comItem));
        }, 1250);
      }
       } else if (slim.className.includes("rock")) {
      if (comItem.className.includes("scissors")) {
        // WIN
        gameOver((state = "win"), (hUser1 = headingUser), (hCom1 = headingCom));
        setTimeout(() => {
          setScore((state = "win"), (tar = score));
        }, 1500);
        // Add Highlight Effect For Choosed Item
        setTimeout(() => {
          highlightEffect((slim = slim));
        }, 1250);
      } else {
        //LOSE
        gameOver(
          (state = "lose"),
          (hUser1 = headingUser),
          (hCom1 = headingCom)
        );
        setTimeout(() => {
          setScore((state = "lose"), (tar = score));
        }, 1500);
        // Add Highlight Effect For Choosed Item
        setTimeout(() => {
          highlightEffect((slim = comItem));
        }, 1250);
      }
    
    
    
    
    
    
