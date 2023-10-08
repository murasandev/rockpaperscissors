let isPlaying = true;

let computerChoice;
let computerChoiceString;

let playerInput;
let playerInt;

let playerScore = 0,
    opponentScore = 0;

// // get input from player
// function getPlayerInput() {
//     playerInput = prompt("Enter \"Rock\", \"Paper\", or \"Scissors\": ");
// }

// // convert playerInput to lowercase
// function toLowerCasePlayerInput() {
//     if (playerInput !== null) {
//         playerInput = playerInput.toLowerCase();
//     }
// }

// // change playerInput to choice
// function convertPlayerChoice() {
//     switch(playerInput) {
//         case "rock":
//             playerInt = 0;
//             break;
        
//         case "paper":
//             playerInt = 1;
//             break;

//         case "scissors":
//             playerInt = 2;
//             break;

//         case null:
//             isPlaying = false;
//             break;

//         default:
//             // alert("Enter a valid option");
//             getPlayerInput();
//             toLowerCasePlayerInput();
//             convertPlayerChoice();
//     }
// }

// convert computer choice to pokemon
let opponentPokemonImgContainer = document.querySelector(".opponent-pokemon");

let opponentPokemonImg = document.createElement("img");
opponentPokemonImg.style.height = "100px";

//get random number for computer
function getComputerChoice(max = 3) {
    computerChoice = Math.floor(Math.random() * max);

    switch(computerChoice) {
        case 0: //fire
            opponentPokemonImg.src = "./images/charmander.png";
            opponentPokemonImgContainer.appendChild(opponentPokemonImg);
            computerChoiceString = "charmander";
            break;

        case 1: //water
            opponentPokemonImg.src = "./images/squirtle.png";
            opponentPokemonImgContainer.appendChild(opponentPokemonImg);
            computerChoiceString = "squirtle";
            break;
        
        case 2: //leaf
            opponentPokemonImg.src = "./images/bulbasaur.png";
            opponentPokemonImgContainer.appendChild(opponentPokemonImg);
            computerChoiceString = "bulbasaur";
            break;
    }
}

let opponentTextContainer = document.querySelector(".opponent-text-container");
let opponentText = document.createElement("p");

function determineRoundWinner(playerInt, computerChoice) {
    let outcome = computerChoice - playerInt;

    switch(outcome) {
        // opponent win condition
        case 1:
        case -2:
            console.log(`You played ${playerInput}, your opponent played ${computerChoiceString}. Your opponent won this round.`);
            opponentText.textContent = `You played ${playerInput}, your opponent played ${computerChoiceString}. Your opponent won this round.`;
            opponentTextContainer.appendChild(opponentText);
            ++opponentScore;
            playerLoseHP();
            break;

        // tie condition
        case 0:
            console.log(`You both played ${playerInput}`);
            opponentText.textContent = `You both played ${playerInput}`;
            opponentTextContainer.appendChild(opponentText);
            break;

        // player win condition
        default:
            console.log(`You played ${playerInput}, your opponent played ${computerChoiceString}. You won this round!`);
            opponentText.textContent = `You played ${playerInput}, your opponent played ${computerChoiceString}. You won this round!`;
            opponentTextContainer.appendChild(opponentText);
            
            ++playerScore;
            opponentLoseHP();
            break;
    }
}

function champion() {
    opponentText.textContent = "Congratulations! You are the new World Champion!";
    opponentTextContainer.appendChild(opponentText);
}

// // run program through loop until you or opponent reach 5 pts
// while (playerScore < 5 && opponentScore < 5 && isPlaying) {
//     getComputerChoice();
//     getPlayerInput();
//     toLowerCasePlayerInput();
//     convertPlayerChoice();
//     convertComputerChoice();
//     if (isPlaying) {
//         determineRoundWinner(playerInt, computerChoice);
//     }
    
//     console.log(`Player Score: ${playerScore}, Opponent Score: ${opponentScore}`);
// }

const startButton = document.querySelector("#start-button");
    
startButton.addEventListener('click', () => {
    enableSelectScreen();
    startButton.style.display = "none";
    setOpponentHP();
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
    setPlayerHP(7);
});

player2Btn.addEventListener("click", () => {
    // alert(player2Btn.className);
    playGame();
    playerSelect("player-2");
    setPlayerHP(5);
})

player3Btn.addEventListener("click", () => {
    // alert(player3Btn.className);
    playGame();
    playerSelect("player-3");
    setPlayerHP(5);
})

player4Btn.addEventListener("click", () => {
    // alert(player4Btn.className);
    playGame();
    playerSelect("player-4");
    setPlayerHP(5);
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

firePokemonBtn.addEventListener("click", () => {
    playRound("fire");
    playerInt = 0;
    getComputerChoice();
    determineRoundWinner(playerInt, computerChoice);
})

waterPokemonBtn.addEventListener("click", () => {
    playRound("water");
    playerInt = 1;
    getComputerChoice();
    determineRoundWinner(playerInt, computerChoice);
})

leafPokemonBtn.addEventListener("click", () => {
    playRound("leaf");
    playerInt = 2;
    getComputerChoice();
    determineRoundWinner(playerInt, computerChoice);
})

function playRound(pokeType){
    switch (pokeType) {
        case "fire":
            playerPokemon.src = "./images/charmander.png";
            pokemonContainer.appendChild(playerPokemon);
            playerInput = "charmander";
            break;
        
        case "water":
            playerPokemon.src = "./images/squirtle.png";
            pokemonContainer.appendChild(playerPokemon);
            playerInput = "squirtle";
            break;
    
        case "leaf":
            playerPokemon.src = "./images/bulbasaur.png";
            pokemonContainer.appendChild(playerPokemon);
            playerInput = "bulbasaur";
            break;
    }
}

// set lives for player and opponent
const opponentLivesContainer = document.querySelector(".opponent-lives");
let opponentHPCounter;

function setOpponentHP(opponentLives = 3) {
    opponentHPCounter = opponentLives;
    for (i = 0; i < opponentLives; i++) {
        let lifeImg = document.createElement("img");
        lifeImg.src = "./images/Poké_Ball_icon.png";
        opponentLivesContainer.appendChild(lifeImg);
    }
}

const playerLivesContainer = document.querySelector(".player-lives");

function setPlayerHP(numberOfLives) {
    for (i = 0; i < numberOfLives; i++) {
        let lifeImg = document.createElement("img");
        lifeImg.src = "./images/Poké_Ball_icon.png";
        playerLivesContainer.appendChild(lifeImg);
    }
}

// reduce player and opponent lives
function playerLoseHP() {
    let removeHPImg = document.querySelector(".player-lives img");
    playerLivesContainer.removeChild(removeHPImg);
}

function opponentLoseHP() {
    let removeHPImg = document.querySelector(".opponent-lives img");
    opponentLivesContainer.removeChild(removeHPImg);
    opponentHPCounter--;

    if (opponentHPCounter === 0 && opponentCounter < 4) {
        setOpponentHP();
        changeOpponent();
    }
}

// Set Opponent
const opponentTrainerContainer = document.querySelector(".opponent-container .trainer-img");
let opponentTrainerImg = document.createElement("img");

opponentTrainerImg.src = "./images/elite-four/trainer-drake.png";
opponentTrainerContainer.appendChild(opponentTrainerImg);

let opponentCounter = 0;

function changeOpponent() {
    opponentCounter++;

    switch(opponentCounter) {
        case 0:
            // opponent 1
            opponentTrainerImg.src = "./images/elite-four/trainer-drake.png";
            opponentTrainerContainer.appendChild(opponentTrainerImg);
            break;

        case 1:
            // opponent 2
            opponentTrainerImg.src = "./images/elite-four/trainer-may.png";
            opponentTrainerContainer.appendChild(opponentTrainerImg);
            break;

        case 2:
            // opponent 3
            opponentTrainerImg.src = "./images/elite-four/trainer-red.png";
            opponentTrainerContainer.appendChild(opponentTrainerImg);
            break;

        case 3:
            // opponent 4
            opponentTrainerImg.src = "./images/elite-four/trainer-elise.png";
            opponentTrainerContainer.appendChild(opponentTrainerImg);
            break;

        case 4:
            // champion
            opponentTrainerImg.src = "./images/elite-four/pokemon-trophy.png";
            opponentTrainerContainer.appendChild(opponentTrainerImg);
            champion();
            break;
    }
}