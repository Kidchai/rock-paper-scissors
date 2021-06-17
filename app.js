const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;

const DRAW = 'DRAW';
const PLAYER_WINS = 'PLAYER_WINS';
const COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid input. We chose ${DEFAULT_PLAYER_CHOICE} for you!`);
    return DEFAULT_PLAYER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34)
    return ROCK;
  else if (randomValue < 0.7)
    return PAPER;
  else
    return SCISSORS;
};

const getWinner = (computerChoice, playerChoice) => {
  if (computerChoice === playerChoice)
    return DRAW;
  else if (
    computerChoice === ROCK && playerChoice === PAPER ||
    computerChoice === PAPER && playerChoice === SCISSORS ||
    computerChoice === SCISSORS && playerChoice === ROCK
    )
    return PLAYER_WINS;
  else
    return COMPUTER_WINS;
}

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning)
    return;
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);
  console.log(winner);
});
