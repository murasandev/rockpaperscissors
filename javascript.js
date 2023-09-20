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

// convert playerInput to lowercase
function toLowerCasePlayerInput() {
    playerInput = playerInput.toLowerCase();
}

toLowerCasePlayerInput();

// change playerInput to choice
let playerInt;

function convertPlayerChoice() {
    switch(playerInput) {
        case "rock":
            console.log(`You played ${playerInput}`);
            playerInt = 0;
            break;
        
        case "paper":
            console.log("You played paper!");
            playerInt = 1;
            break;

        case "scissors":
            console.log("You played scissors");
            playerInt = 2;
            break;

        default:
            console.log("Enter a valid option");
    }
}

// convert computer choice to string
let computerChoiceString;

function convertComputerChoice() {
    switch(computerChoice) {
        case 0:
            computerChoiceString = 'rock';
            break;

        case 1:
            computerChoiceString = 'paper';
            break;
        
        case 2:
            computerChoiceString = 'scissors';
            break;
    }
}

convertComputerChoice();
convertPlayerChoice();

console.log(`playerInt: ${playerInt}`);

function compareChoices(playerInt, computerChoice) {
    let outcome = computerChoice - playerInt;
    if (outcome === 1 || outcome === -2) {
        console.log(`You played ${playerInput}, your opponent played ${computerChoiceString}. Your opponent won this round.`);
    }
    else if (outcome === 0) {
        console.log(`You both played ${playerInput}`);
    }
    else {
        console.log(`You played ${playerInput}, your opponent played ${computerChoiceString}. You won this round!`);
    }
}

compareChoices(playerInt, computerChoice);