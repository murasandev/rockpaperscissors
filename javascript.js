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
            // alert("Enter a valid option");
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

const startButton = document.querySelector("#start-button");
    
startButton.addEventListener('click', () => {
    enableSelectScreen();
    startButton.style.display = "none";
});

// Control player Select Screen
let playerSelectScreen = document.querySelector(".trainer-select");

function enableSelectScreen() {
    playerSelectScreen.style.display = "flex";
}

function disableSelectScreen() {
    playerSelectScreen.style.display = "none";
}

// Set Player trainer to selected trainer
const player1Btn = document.querySelector(".trainer-1");
const player2Btn = document.querySelector(".trainer-2");
const player3Btn = document.querySelector(".trainer-3");
const player4Btn = document.querySelector(".trainer-4");

let playerImgContainer = document.querySelector(".player-img");

let playerImg = document.createElement("img");
playerImg.style.height = "250px";

player1Btn.addEventListener("click", () => {
    // alert(player1SelectBtn.className);
    playGame();
    playerSelect("player-1");
});

player2Btn.addEventListener("click", () => {
    // alert(player2Btn.className);
    playGame();
    playerSelect("player-2");
})

player3Btn.addEventListener("click", () => {
    // alert(player3Btn.className);
    playGame();
    playerSelect("player-3");
})

player4Btn.addEventListener("click", () => {
    // alert(player4Btn.className);
    playGame();
    playerSelect("player-4");
})

function playerSelect(playerSelection){
    switch(playerSelection) {
        case "player-1":
            playerImg.src = "./images/poke-trainer-img/boy1_front.png"
            playerImgContainer.appendChild(playerImg);
            break;
        
        case "player-2":
            playerImg.src = "./images/poke-trainer-img/boy2_front.png";
            playerImgContainer.appendChild(playerImg);
            break;
    
        case "player-3":
            playerImg.src = "./images/poke-trainer-img/girl1_front.png";
            playerImgContainer.appendChild(playerImg);
            break;
    
        case "player-4":
            playerImg.src = "./images/poke-trainer-img/girl2 front.png";
            playerImgContainer.appendChild(playerImg);
            break;
    }
}

// Transition to Game screen from Trainer Select Screen
const gameContainer = document.querySelector(".game-container");

function enableGameContainer() {
    gameContainer.style.display = "flex";
}

function playGame() {
    disableSelectScreen();
    enableGameContainer();
}

// Set pokemon image to match player choice
const pokemonContainer = document.querySelector(".trainer-pokemon");

let playerPokemon = document.createElement("img");
playerPokemon.style.height = "100px";

const firePokemonBtn = document.querySelector(".fire-pokemon-btn");
const waterPokemonBtn = document.querySelector(".water-pokemon-btn");
const leafPokemonBtn = document.querySelector(".leaf-pokemon-btn");

let pokeType;

firePokemonBtn.addEventListener("click", () => {
    pokeType = "fire";
    playRound(pokeType);
})

waterPokemonBtn.addEventListener("click", () => {
    pokeType = "water";
    playRound(pokeType);
})

function playRound(pokeType){
    switch (pokeType) {
        case "fire":
            playerPokemon.src = "./images/charmander.png";
            pokemonContainer.appendChild(playerPokemon);
            break;
        
        case "water":
            playerPokemon.src = "./images/squirtle.png";
            pokemonContainer.appendChild(playerPokemon);
            break;
    
        case "leaf":
            break;
    }
}
