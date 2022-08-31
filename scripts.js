let playerScore = 0;
let computerScore = 0;
let gameID = 0;
let winnerName = "";
let loserName = "";
let winnerScore = 0;
let loserScore = 0;
const screenOne = document.querySelector(".startScreen");
const screenTwo = document.querySelector(".gameScreen");
const screenThree = document.querySelector(".finalScreen");

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  screenOne.style.display = "none";
  screenTwo.style.display = "flex";

});

function endGame() {
  screenThree.style.display = "flex";
  screenTwo.style.display = "none";
}

const choices = {
  '#rockBtn': 'rock',
  '#paperBtn': 'paper',
  '#scissorsBtn': 'scissors'
}
let playerChoice = "";
let randomChoice = 0;

const painelPlayer = document.querySelector("#playerChoiceCard");
const painelComputer = document.querySelector("#machineChoiceCard");
const playerCounter = document.querySelector("#playerScorePainel");
const computerCounter = document.querySelector("#computerScorePainel");
const roundWinner = document.querySelector("#resultPhasePainel");
const winner = document.querySelector("#winnerGame");
const resultGame = document.querySelector('.resultScore');
function recordGame() {
  const gameLog = document.createElement('p');
  gameLog.classList.add('resultScore__text');
  gameLog.innerText = `Game ${gameID} Winner - ${winnerName}: ${winnerScore} x ${loserScore} ${loserName}`;
  resultGame.appendChild(gameLog);
}

for (let choice in choices) {
  const theChoice = choices[choice];
  const btnPlayerChoice = document.querySelector(choice);

  btnPlayerChoice.addEventListener("click", () => {
    playerChoice = theChoice;

    randomChoice = Math.floor(Math.random() * choices[choice].length);
    if (randomChoice === 1) {
      computerChoice = 'rock';
    }
    if (randomChoice === 2) {
      computerChoice = 'paper';
    }
    if (randomChoice === 3) {
      computerChoice = 'scissors';
    }

    painelPlayer.src = `images/${playerChoice}.png`;
    painelComputer.src = `images/${computerChoice}.png`;
    if (
      (playerChoice == 'rock' && computerChoice == 'scissors') ||
      (playerChoice == 'paper' && computerChoice == 'rock') ||
      (playerChoice == 'scissors' && computerChoice == 'paper')) {
      roundWinner.innerText = 'You win this round';
      playerScore++;
      playerCounter.innerText = playerScore;


    }

    if (
      (computerChoice == 'rock' && playerChoice == 'scissors') ||
      (computerChoice == 'paper' && playerChoice == 'rock') ||
      (computerChoice == 'scissors' && playerChoice == 'paper')) {
      roundWinner.innerText = 'Machine win this round';
      computerScore++;
      computerCounter.innerText = computerScore;
    }

    if (playerChoice === computerChoice) {
      roundWinner.innerText = 'Draw';
    }

    if (computerScore == 3) {
      gameID++;
      winnerName = 'Machine';
      loserName = "You";
      winnerScore = computerScore;
      loserScore = playerScore;
      winner.innerText = winnerName;
      endGame();
      recordGame();
    }

    if (playerScore == 3) {
      gameID++;
      winnerName = 'You';
      loserName = 'Machine';
      winnerScore = playerScore;
      loserScore = computerScore;
      winner.innerText = winnerName;
      endGame();
      recordGame();
    }

  })

}

const restartGameBtn = document.querySelector("#restartGame");
restartGameBtn.addEventListener('click', () => {
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
});
