let playerScore = 0;
let computerScore = 0;
let result = '';

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
let pcChoice = 0;

for (let choice in choices) {
  const theChoice = choices[choice];
  const btnPlayerChoice = document.querySelector(choice);
  btnPlayerChoice.addEventListener("click", () => {
    playerChoice = theChoice;
    
    pcChoice = Math.floor(Math.random() * choices[choice].length);
    if (pcChoice === 1) {
      computerChoice = 'rock';
    }
    if (pcChoice === 2) {
      computerChoice = 'paper';
    }
    if (pcChoice === 3) {
      computerChoice = 'scissors';
    }
    console.log(playerChoice);
    console.log(computerChoice);

    if(
      (playerChoice == 'rock' && computerChoice == 'scissors')||
      (playerChoice == 'paper' && computerChoice == 'rock')||
      (playerChoice == 'scissors' && computerChoice == 'paper')){
        result='Humam win';
        playerScore++;
        let placar = `O placar é : player: ${playerScore} x Computer: ${computerScore}`
        console.log(result);
        console.log(placar);
    }

    if(
      (computerChoice == 'rock' && playerChoice == 'scissors')||
      (computerChoice == 'paper' && playerChoice == 'rock')||
      (computerChoice == 'scissors' && playerChoice == 'paper')){
        result='Computer win';
        computerScore++;
        let placar = `O placar é : player: ${playerScore} x Computer: ${computerScore}`
        console.log(result);
        console.log(placar);
        
    }

    if(playerChoice === computerChoice){
      result='empate';
      console.log(result);
    }
    
  })

}

/*
function getPlayerChoice() {
  
  playerChoice = "";
  const rockBtn = document.querySelector('#rockBtn');
  rockBtn.addEventListener('click', () => {
   
     
  });

  const paperBtn = document.querySelector('#paperBtn')
  paperBtn.addEventListener('click', () => {
    let playerChoice = 'paper';
    console.log(playerChoice);
    
    
  });

  
  const scissorsBtn = document.querySelector('#scissorsBtn')
  scissorsBtn.addEventListener('click', ()=>{
    
    let playerChoice = 'scissors';
      console.log(playerChoice);
      
  });

  if(pcChoice === playerChoice){
    console.log("empate")
   }
  
}
getPlayerChoice()
*/
/*
function game( ){

  getComputerChoice()
  getPlayerChoice()
  if(getPlayerChoice === getComputerChoice){
    console.log('Empate')
  }
  if( getPlayerChoice === "rock" && getComputerChoice ==="scissors" ||
      getPlayerChoice === "paper" && getComputerChoice ==="rock" ||
      getPlayerChoice === "scissors" && getComputerChoice ==="paper"){
      
        console.log('Player Win this Round');
        playerScore + 1;

  }

  if( getComputerChoice === "rock" && getPlayerChoice ==="scissors" ||
      getComputerChoice === "paper" && getComputerChoice ==="rock" ||
      getComputerChoice === "scissors" && getComputerChoice ==="paper"){
      
        console.log('Computer Win this Round');
        ComputerScore + 1;
        console.log()
    }
}
game();

*/



