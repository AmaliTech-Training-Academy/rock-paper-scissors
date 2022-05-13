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
let gameResult = document.getElementById("status");
let userChoice, computerChoice;
let score = 0;
let winner;
let storedScore = 0;

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
  storedScore = localStorage.getItem("score");
  scoreLabel.innerHTML = storedScore;
}
