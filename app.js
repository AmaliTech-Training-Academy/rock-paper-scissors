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
