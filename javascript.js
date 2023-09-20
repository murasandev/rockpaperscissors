let isPlaying = true;

let computerChoice;
let computerChoiceString;

let playerInput;
let playerInt;

let playerScore = 0,
    opponentScore = 0;

//get random number for computer
function getComputerChoice(max = 3) {
    console.log(computerChoice = Math.floor(Math.random() * max));
}

// get input from player
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