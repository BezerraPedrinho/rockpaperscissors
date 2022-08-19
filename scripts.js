let playerScore = 0;
let computerScore = 0;
let roundWinnner = '';
numberGame=0;
gameLog="Start Game";
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  const screenOne = document.querySelector(".startScreen");
  screenOne.style.display = "none";
  const screenTwo = document.querySelector(".gameScreen");
  screenTwo.style.display = "flex";

});



const choices = {
  '#rockBtn': 'rock',
  '#paperBtn': 'paper',
  '#scissorsBtn': 'scissors'
}
playerChoice = "";
let randomChoice = 0;

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
    console.log(playerChoice);
    console.log(computerChoice);

    if(
      (playerChoice == 'rock' && computerChoice == 'scissors')||
      (playerChoice == 'paper' && computerChoice == 'rock')||
      (playerChoice == 'scissors' && computerChoice == 'paper')){
        roundWinnner='Player win';
        playerScore++;
        let placar = `O placar é : player: ${playerScore} x Computer: ${computerScore}`
        console.log(roundWinnner);
        console.log(placar);
    }

    if(
      (computerChoice == 'rock' && playerChoice == 'scissors')||
      (computerChoice == 'paper' && playerChoice == 'rock')||
      (computerChoice == 'scissors' && playerChoice == 'paper')){
        roundWinnner='Computer win';
        computerScore++;
        let placar = `O placar é : player: ${playerScore} x Computer: ${computerScore}`;
        console.log(roundWinnner);
        console.log(placar);
    }

    if(playerChoice === computerChoice){
      roundWinnner = 'Draw';
      console.log(roundWinnner);
    }
        
    if(computerScore == 3){
        winnerGame = "Computer win";
        console.log (winnerGame);
        numberGame++;
        gamelog = ` Game: ${numberGame} The game is over and the Winner is : ${winnerGame} result CPU : ${computerScore} x Player ${playerScore}`
        console.log(gamelog);
        playerScore = 0;
        computerScore = 0;
    }
    if(playerScore == 3){
      winnerGame = "Player Win";
      console.log (winnerGame);
      numberGame++
      gamelog = `Game: ${numberGame} The game is over and the Winner is : ${winnerGame} result CPU : ${computerScore} x Player ${playerScore}`
      console.log(gamelog);
      playerScore = 0;
      computerScore = 0;
  }
    

  })
   
}
