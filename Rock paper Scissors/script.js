/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const rpsButton = document.querySelectorAll('.rpsButton');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.getElementById('result');
const endGameButton = document.getElementById('endGameButton');

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

let playerScoreCount = 0; 
let computerScoreCount = 0;

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    result.innerText = `You draw! You 🧔‍♂️ chose ${playerChoice}, I 🤖 chose ${computerChoice}.`;
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    result.innerText = `It's a win! You 🧔‍♂️ chose ${playerChoice}, I 🤖 chose ${computerChoice}.`;
    playerScoreCount++;
  } else {
    result.innerText = `You lose! You 🧔‍♂️ chose ${playerChoice}, I 🤖 chose ${computerChoice}.`;
    computerScoreCount++;
  }
  
  playerScore.innerText = `Player Score: ${playerScoreCount}`;
  computerScore.innerText = `Computer Score: ${computerScoreCount}`;
}

function playGame() {
  rpsButton.forEach(button => {
    button.addEventListener('click', () => {
      const playerChoice = button.value;
      const computerChoice = getComputerChoice();
      getResult(playerChoice, computerChoice);
    });
  });

  endGameButton.addEventListener('click', endGame);
}

function endGame() {
  playerScoreCount = 0;
  computerScoreCount = 0;
  playerScore.innerText = 'Player Score: 0';
  computerScore.innerText = 'Computer Score: 0';
  result.innerText = '';
}

playGame();



   