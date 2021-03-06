const scoreLabel = document.querySelector(".value");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");
const gameOptions = document.querySelector(".game-options");
const resultContainer = document.querySelector(".result-container");
const resetBtn = document.querySelector(".play-again");
const userImg = document.getElementById("user");
const compImg = document.getElementById("machine");
const buttons = document.querySelectorAll(".button");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const resultBox = document.querySelector(".result-title");
const hideComputerChoice = document.querySelector(".invisible");
const resetScorebtn = document.querySelector(".reset");
let gameResult = document.getElementById("status");
let userChoice, computerChoice;
let score = 0;
let winner;
let storedScore = localStorage.getItem("score");
scoreLabel.innerText = storedScore;

const pointMap = new Map();
pointMap.set("paper", 0);
pointMap.set("scissors", 1);
pointMap.set("rock", 2);

function init() {
  let choices = ["paper", "scissors", "rock"];
  userChoice = undefined;
  computerChoice = undefined;

  buttons.forEach((curr) => {
    curr.addEventListener("click", () => {
      userChoice = curr.id;
      choices.splice(choices.indexOf(userChoice), 1);
      computerChoice = choices[choiceGen()];
      console.log(userChoice);
      console.log(computerChoice);
      console.log(choices);
      choices = ["paper", "scissors", "rock"];
      checkWinner();
      result(userChoice, computerChoice);
    });
  });
}

//choice generator for computer

function choiceGen() {
  return Math.floor(Math.random() * 2);
}
//Update Score

function updateScore(value) {
  score += value;
  localStorage.setItem("score", JSON.stringify(score));
  console.log(storedScore);
  let updatedScore = localStorage.getItem("score");
  scoreLabel.innerText = updatedScore;
}



// reset score
function resetScore(){
  score = 0;
  localStorage.setItem("score", JSON.stringify(score));
  let updatedScore = localStorage.getItem("score");
  scoreLabel.innerText = updatedScore;
  reset()
}




resetScorebtn.addEventListener('click', resetScore)
//function to check who is the winner

function checkWinner() {
  if (userChoice === "paper") {
    player.style.backgroundImage =
      "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
  } else if (userChoice === "rock") {
    player.style.backgroundImage =
      "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
  } else if (userChoice === "scissors") {
    player.style.backgroundImage =
      "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
  }

  if (computerChoice === "paper") {
    computer.style.backgroundImage =
      "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
  } else if (computerChoice === "rock") {
    computer.style.backgroundImage =
      "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
  } else if (computerChoice === "scissors") {
    computer.style.backgroundImage =
      "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
  }

  if (userChoice === "paper" && computerChoice === "rock") {
    gameResult.innerText = "you win";
    winner = userChoice;
      setTimeout(() => updateScore(1), 2000);
  } else if (userChoice === "rock" && computerChoice === "paper") {
    gameResult.innerText = "you lose";
    winner = computerChoice;
     setTimeout(()=> updateScore(-1), 2000);
  } else if (pointMap.get(userChoice) > pointMap.get(computerChoice)) {
    gameResult.innerText = "you win";
    winner = userChoice;
    setTimeout(() => updateScore(1), 2000);
  } else {
    gameResult.innerText = "you lose";
    winner = computerChoice;
      setTimeout(() => updateScore(-1), 2000);
  }

  // console.log(score);
}

//update the view

function result(userChoice, computerChoice) {
  gameOptions.classList.add("active");
  resultContainer.classList.add("active");
  player.classList.add(userChoice);
  computer.classList.add(computerChoice);

  userImg.src = `images/icon-${userChoice}.svg`;
  compImg.src = `images/icon-${computerChoice}.svg`;

  setTimeout(load, 2000);
  setTimeout(showComputerChoice, 2000);
}

function load() {
  resultContainer.classList.add("load");
  resultBox.classList.add("active");
  if (winner == userChoice) {
    player.classList.add("effect-left");
  } else {
    computer.classList.add("effect-right");
  }
}

function showComputerChoice() {
  hideComputerChoice.classList.add("active");
}

function reset() {
  gameOptions.classList.remove("active");
  resultContainer.classList.remove("active");
  player.classList.remove(userChoice);
  computer.classList.remove(computerChoice);
  player.classList.remove("effect-left");
  computer.classList.remove("effect-right");
  resultContainer.classList.remove("load");
  resultBox.classList.remove("active");
  hideComputerChoice.classList.remove("active");
}

//setting play again init();
resetBtn.addEventListener("click", reset);

init();

