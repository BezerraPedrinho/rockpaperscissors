
let playerScore = 0;
let ComputerScore = 0;


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  const screenOne = document.querySelector(".startScreen");
  screenOne.style.display = "none";
  const screenTwo = document.querySelector(".gameScreen");
  screenTwo.style.display = "flex";

});



function getComputerChoice(){
  let choices = [
    'rock', 'paper', 'scissors'
  ]
   let randomChoice = Math.floor(Math.random() * choices.length);
  if (randomChoice === 0) {
    randomChoice = choices[0];
  }

  if (randomChoice === 1) {
    randomChoice = choices[1];
  }

  if (randomChoice === 2) {
    randomChoice = choices[2];
  }
 return randomChoice;
  
}

function getPlayerChoice() {

  const rockBtn = document.querySelector('#rockBtn');
  rockBtn.addEventListener('click', () => {
    let playerChoice = 'rock';
    console.log(playerChoice);
    

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

  
  
}


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

function playRound(){
  if( playerScore <3 || ComputerScore <3 ){
    game();
    alert('ainda tem jogo');
  }
  if ( playerScore ===3 ){
    console.log('the Player win this game')
  }
  if ( ComputerScore ===3 ){
    console.log('the thecomputer win this game')
  }
}



