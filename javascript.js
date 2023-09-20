// Goal: Create a rock paper scissors game against the computer
// First to 5, wins the game

// Write function to play a single round of rps.
// function takes two parameters (player selection, computer selection)
// return/declare player and computer selections
// return/declare winner of the round

// Run game function through a loop until player or computer reach 5 wins
// After each round add score to round winners total score.
// Once player or computer reach a score of 5, end game

//get random number for computer
let computerChoice;

function getComputerChoice(max = 3) {
    console.log(computerChoice = Math.floor(Math.random() * max));
}

getComputerChoice();

// get input from player
let playerInput;

function getPlayerInput() {
    playerInput = prompt("Enter \"Rock\", \"Paper\", or \"Scissors\": ");
}

getPlayerInput();
console.log(playerInput);