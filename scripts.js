"use strict"

const screenOne = document.querySelector(".startScreen");
const btnStart = document.querySelector("#btn");
btnStart.addEventListener("click", () => {
  screenOne.style.display = "none";
  screenTwo.style.display = "flex";
});

const screenTwo = document.querySelector(".gameScreen");
const screenThree = document.querySelector(".finalScreen");
function endGame() {
  screenThree.style.display = "flex";
  screenTwo.style.display = "none";
}

const painelPlayer = document.querySelector("#playerChoiceCard");
const painelComputer = document.querySelector("#machineChoiceCard");
function renderChoices(playerChoice,computerChoice) {
  painelPlayer.src = `images/${playerChoice}.png`;
  painelComputer.src = `images/${computerChoice}.png`;  
}

let gameID = 0;
const winner = document.querySelector("#winnerGame");
const resultGame = document.querySelector(".resultScore");
function recordGame(winnerName, loserName, winnerScore, loserScore) {
  gameID++;
  winner.innerText = winnerName;
  const gameLog = document.createElement("p");
  gameLog.classList.add("resultScore__text");
  gameLog.innerText = `Game ${gameID} Winner - ${winnerName}: ${winnerScore} x ${loserScore} ${loserName}`;
  resultGame.appendChild(gameLog);
  endGame();
}

let playerScore = 0;
let computerScore = 0;
const playerCounter = document.querySelector("#playerScorePainel");
const computerCounter = document.querySelector("#computerScorePainel");
const roundWinner = document.querySelector("#resultPhasePainel");
function resolveRound(playerChoice, computerChoice) {
  if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")) {
    roundWinner.innerText = "You win this round";
    playerScore++;
    playerCounter.innerText = playerScore;
  }
  else if (
    (computerChoice == "rock" && playerChoice == "scissors") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissors" && playerChoice == "paper")) {
    roundWinner.innerText = "Machine win this round";
    computerScore++;
    computerCounter.innerText = computerScore;
  }

  if (playerChoice === computerChoice) {
    roundWinner.innerText = "Draw";
  }

  if (computerScore == 5) {
    recordGame("Machine", "You", computerScore, playerScore);
  }
  else if (playerScore == 5) {
    recordGame("You", "Machine", playerScore, computerScore);
  }
}

const choices = {
  "#rockBtn": "rock",
  "#paperBtn": "paper",
  "#scissorsBtn": "scissors"
}

function getcomputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "rock";
  }
  if (randomChoice === 1) {
    return "paper";
  }
  if (randomChoice === 2) {
    return "scissors";
  }
}

for (let choice in choices) {
  let playerChoice = "";
  let computerChoice= "";
  const theChoice = choices[choice];
  const btnPlayerChoice = document.querySelector(choice);
  btnPlayerChoice.addEventListener("click", () => {
    playerChoice = theChoice;
    computerChoice = getcomputerChoice();
    renderChoices(playerChoice,computerChoice);
    resolveRound(playerChoice,computerChoice);
  });

}

function restartGame(playerChoice, computerChoice) {
  screenThree.style.display = "none";
  screenTwo.style.display = "flex";
  playerScore = 0;
  computerScore = 0;
  playerCounter.innerText = 0;
  computerCounter.innerText = 0;
  playerChoice = "";
  computerChoice = "";
  painelPlayer.src = "";
  painelComputer.src = "";
  roundWinner.innerText = "";
}

const restartGameBtn = document.querySelector("#restartGame");
restartGameBtn.addEventListener("click", () => {
  restartGame();
});
