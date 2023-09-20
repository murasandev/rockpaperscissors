// Goal: Create a rock paper scissors game against the computer
// First to 5, wins the game

// Write function to play a single round of rps.
// function takes two parameters (player selection, computer selection)
// return/declare player and computer selections
// return/declare winner of the round

// Run game function through a loop until player or computer reach 5 wins
// After each round add score to round winners total score.
// Once player or computer reach a score of 5, end game

let isPlaying = true;

//get random number for computer
let computerChoice;

function getComputerChoice(max = 3) {
    console.log(computerChoice = Math.floor(Math.random() * max));
}

// get input from player
let playerInput;

function getPlayerInput() {
    playerInput = prompt("Enter \"Rock\", \"Paper\", or \"Scissors\": ");
}

// convert playerInput to lowercase
function toLowerCasePlayerInput() {
    if (playerInput !== null) {
        playerInput = playerInput.toLowerCase();
    }
}

// change playerInput to choice
let playerInt;

function convertPlayerChoice() {
    switch(playerInput) {
        case "rock":
            playerInt = 0;
            break;
        
        case "paper":
            playerInt = 1;
            break;

        case "scissors":
            playerInt = 2;
            break;

        case null:
            isPlaying = false;
            break;

        default:
            alert("Enter a valid option");
            getPlayerInput();
            toLowerCasePlayerInput();
            convertPlayerChoice();
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

console.log(`playerInt: ${playerInt}`);

function determineRoundWinner(playerInt, computerChoice) {
    let outcome = computerChoice - playerInt;

    switch(outcome) {
        // opponent win condition
        case 1:
        case -2:
            console.log(`You played ${playerInput}, your opponent played ${computerChoiceString}. Your opponent won this round.`);
            ++opponentScore;
            break;

        // tie condition
        case 0:
            console.log(`You both played ${playerInput}`);
            break;

        // player win condition
        default:
            console.log(`You played ${playerInput}, your opponent played ${computerChoiceString}. You won this round!`);
            ++playerScore;
            break;
    }
}

// run program through loop until you or opponent reach 5 pts
let playerScore = 0,
    opponentScore = 0;

while (playerScore < 5 && opponentScore < 5 && isPlaying) {
    getComputerChoice();
    getPlayerInput();
    toLowerCasePlayerInput();
    convertPlayerChoice();
    convertComputerChoice();
    if (isPlaying) {
        determineRoundWinner(playerInt, computerChoice);
    }
    
    console.log(`Player Score: ${playerScore}, Opponent Score: ${opponentScore}`);
}