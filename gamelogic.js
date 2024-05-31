let playerWins = 0;
let computerWins = 0;

const choices = ["rock", "paper", "scissors"];

// Generates random choice for computer player
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice()); // Test the function without passing choices

document.addEventListener("DOMContentLoaded", () => {
  // Enables buttons for player selection
  // Linkes to buttonPress to use IDs of buttons for player input
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", buttonPress);
  });

  // Plays a round of RPS
  function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "rock")
    ) {
      return "Computer has won round!";
    } else if (playerSelection == computerSelection) {
      return "This round is a draw!";
    } else {
      return "Player has won round!";
    }
  }

  function buttonPress(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result == "Computer has won round!") {
      computerWins++;
    } else if (result == "This round is a draw!") {
      console.log("Draw");
    } else {
      playerWins++;
    }

    console.log(`Player Wins: ${playerWins}, Computer Wins: ${computerWins}`); // Debugging

    document.getElementById(
      "playerchoice"
    ).textContent = `Player has chosen ${playerSelection}`;
    document.getElementById(
      "computerchoice"
    ).textContent = `Computer has chosen ${computerSelection}`;
    document.getElementById("narrative").textContent = result;
    document.getElementById("playerscore").textContent = playerWins;
    document.getElementById("computerscore").textContent = computerWins;

    if (playerWins == 3) {
      document.getElementById("narrative").textContent =
        "Player has won! Refresh the page to play again.";
    } else if (computerWins == 3) {
      document.getElementById("narrative").textContent =
        "Computer has Won! Refresh the page to play again.";
    }
  }
});
