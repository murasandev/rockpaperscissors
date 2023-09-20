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


function getComputerChoice(max = 3){
    let computerChoice = Math.floor(Math.random() * max);
    console.log(computerChoice);
}

getComputerChoice();