let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[random];
}

function getNumberOfGames() {
  let numberOfGames = prompt("Enter the number of games: ");
  return parseInt(numberOfGames, 10); // Ensure the input is treated as an integer
}

function playRound(player, computer) {
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    humanScore++;
    return "Win";
  } else if (player === computer) {
    return "Draw";
  } else {
    computerScore++;
    return "Lose";
  }
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  console.log("Your choices are: rock, paper, scissors");
  const humanChoice = prompt("Enter your choice: ").toLowerCase();
  if (choices.includes(humanChoice)) {
    return humanChoice;
  } else {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    return getHumanChoice(); // Recursive call for valid input
  }
}

console.log("Welcome to the game!");
console.log(`Initial Score - You: ${humanScore}, Computer: ${computerScore}`);

const numberOfGames = getNumberOfGames();
for (let i = 0; i < numberOfGames; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);
  console.log(`You chose: ${humanSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  console.log(`Result: ${result}`);
  console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
}

console.log("Game Over!");
console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
if (humanScore > computerScore) {
  console.log("You win the game!");
} else if (humanScore < computerScore) {
  console.log("Computer wins the game!");
} else {
  console.log("The game is a draw!");
}
