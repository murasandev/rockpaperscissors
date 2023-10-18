let isPlaying = true;

let computerChoice;
let computerChoiceString;

let playerInput;
let playerInt;
let playerWin;

let playerScore = 0,
    opponentScore = 0;

// convert computer choice to pokemon
let opponentPokemonImgContainer = document.querySelector(".opponent-pokemon");

let opponentPokemonImg = document.createElement("img");
opponentPokemonImg.style.height = "100px";

//get random number for computer
function getComputerChoice(max = 1) {
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

const opponentTextContainer = document.querySelector(".opponent-text-container");
let opponentText = document.createElement("p");

function determineRoundWinner(playerInt, computerChoice) {
    let outcome = computerChoice - playerInt;

    switch(outcome) {
        // opponent win condition
        case 1:
        case -2:
            opponentWinTextOutput();
            ++opponentScore;
            playerLoseHP();
            break;

        // tie condition
        case 0:
            opponentTieTextOutput();
            break;

        // player win condition
        default:
            opponentLoseTextOutput();
            
            ++playerScore;
            opponentLoseHP();
            break;
    }
    if (!gameOver) {
        setTimeout(nextRound, 1000);
    }
}

function champion() {
    playerAbilBtns.style.display = "none";
    otherBtns.style.display = "flex";
    gameOver = true;
    opponentLoseTextOutput();
    removePlayerText();
}

function youLose() {
    playerAbilBtns.style.display = "none";
    otherBtns.style.display = "flex";
    gameOver = true;
    opponentWinTextOutput();
    removePlayerText();
}

const startButton = document.querySelector("#start-button");
    
startButton.addEventListener('click', () => {
    enableSelectScreen();
    startButton.style.display = "none";
    setOpponentHP();

    trainerSelectTextType();
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

let trainerType;

player1Btn.addEventListener("click", () => {
    playGame();
    playerSelect("player-1");
    setPlayerHP(7);
    trainerType = "resilient";
});

player2Btn.addEventListener("click", () => {
    playGame();
    playerSelect("player-2");
    setPlayerHP(5);
    trainerType = "scout";
})

player3Btn.addEventListener("click", () => {
    playGame();
    playerSelect("player-3");
    setPlayerHP(5);
    trainerType = "warrior";
})

player4Btn.addEventListener("click", () => {
    playGame();
    playerSelect("player-4");
    setPlayerHP(5);
    trainerType = "nurturing";
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
    textType.style.display = "none";
}

// Transition to Game screen from Trainer Select Screen
const gameContainer = document.querySelector(".game-container");

function enableGameContainer() {
    gameContainer.style.display = "flex";
}

function disableGameContainer() {
    gameContainer.style.display = "none";
}

function playGame() {
    disableSelectScreen();
    enableGameContainer();
}

// Set pokemon image to match player choice
const pokemonContainer = document.querySelector(".trainer-pokemon");

let playerPokemon = document.createElement("img");
playerPokemon.style.height = "100px";

const playerAbilBtns = document.querySelector(".player-abil-btns");

function enablePlayerAbilBtns() {
    playerAbilBtns.style.display = "flex";
}

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

const playerText = document.querySelector(".player-text");

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

    hidePlayerAbilBtns();
    playerText.textContent = `I choose you ${playerInput}!`;
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
let playerLives;
let maxHP;

function setPlayerHP(numberOfLives) {
    playerLives = numberOfLives;
    maxHP = numberOfLives;
    for (i = 0; i < numberOfLives; i++) {
        let lifeImg = document.createElement("img");
        lifeImg.src = "./images/Poké_Ball_icon.png";
        playerLivesContainer.appendChild(lifeImg);
    }
}

// reduce player and opponent lives
function playerLoseHP() {
    if (playerLives > 0) {
        let removeHPImg = document.querySelector(".player-lives img");
        playerLivesContainer.removeChild(removeHPImg);
        playerLives--;
    }
    if (playerLives === 0) {
        youLose();
        gameOver = true;
        opponentWinTextOutput();
    }
}

// add 1 hp to player lives
function playerAddOneHP() {
    let lifeImg = document.createElement("img");
    lifeImg.src = "./images/Poké_Ball_icon.png";
    playerLivesContainer.appendChild(lifeImg);
    playerLives++;
}

function opponentLoseHP() {
    let removeHPImg = document.querySelector(".opponent-lives img");
    opponentLivesContainer.removeChild(removeHPImg);
    opponentHPCounter--;

    if (opponentHPCounter === 0 && opponentCounter < 4) {
        setOpponentHP();
        changeOpponent();

        
        if (trainerType === "resilient" && playerLives < 7) {
            playerAddOneHP();
        }

        else if (trainerType === "scout" && playerLives < 5) {
            playerAddOneHP();
        }

        else if (trainerType === "warrior" && playerLives < 5) {
            playerAddOneHP();
        }

        else if (trainerType === "nurturing" && playerLives < 5) {
            livesCounter = 5 - playerLives;
            for (i = 0; i < livesCounter; i++) {
                playerAddOneHP();
            }
        }
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
            removeOpponentPokeImg();
            break;

        case 1:
            // opponent 2
            opponentTrainerImg.src = "./images/elite-four/trainer-may.png";
            opponentTrainerContainer.appendChild(opponentTrainerImg);
            removeOpponentPokeImg();
            break;

        case 2:
            // opponent 3
            opponentTrainerImg.src = "./images/elite-four/trainer-red.png";
            opponentTrainerContainer.appendChild(opponentTrainerImg);
            removeOpponentPokeImg();
            break;

        case 3:
            // opponent 4
            opponentTrainerImg.src = "./images/elite-four/trainer-elise.png";
            opponentTrainerContainer.appendChild(opponentTrainerImg);
            removeOpponentPokeImg();
            break;

        case 4:
            // champion
            opponentTrainerImg.src = "./images/elite-four/pokemon-trophy.png";
            opponentTrainerContainer.appendChild(opponentTrainerImg);
            champion();
            break;
    }
}

// after game over change buttons to replay button
const otherBtns = document.querySelector(".other-btns");

function disableOtherBtns() {
    otherBtns.style.display = "none";
}

const replayBtn = document.querySelector(".replay-btn");

replayBtn.addEventListener("click", () => {
    // restart game
    enableSelectScreen();
    disableGameContainer();
    enablePlayerAbilBtns();
    disableOtherBtns();

    // resets opponent back to first trainer
    opponentCounter = 0;
    opponentTrainerImg.src = "./images/elite-four/trainer-drake.png";
    opponentTrainerContainer.appendChild(opponentTrainerImg);

    // reset opponent hp back to 3 lives
    resetOpponentHP();

    //reset player hp
    resetPlayerHP();
    removePlayerPokeImg();

    resetOpponentText();
    removeOpponentPokeImg();

    trainerSelectTextType();

    gameOver = false;
})

function resetOpponentHP() {
    while(opponentLivesContainer.firstChild){
        opponentLivesContainer.removeChild(opponentLivesContainer.firstChild);
    }

    setOpponentHP();
}

function resetPlayerHP() {
    while(playerLivesContainer.firstChild){
        playerLivesContainer.removeChild(playerLivesContainer.firstChild);
    }

    playerLives = 0;
}

function nextRound() {
    enablePlayerAbilBtns();
    removePlayerPokeImg();
    removePlayerText();
}

function resetOpponentText() {
    opponentTextContainer.textContent = "";
}

function hidePlayerAbilBtns() {
    playerAbilBtns.style.display = "none";
}

function removeOpponentPokeImg() {
    opponentPokemonImgContainer.removeChild(opponentPokemonImg);
}

function removePlayerText() {
    playerText.textContent = "";
}

function removePlayerPokeImg() {
    pokemonContainer.removeChild(playerPokemon);
    
}

let gameOver = false;

// text type function for intro page and trainer select page
let typingCounter = 0;
let text;
const textType = document.querySelector(".intro-text");


function typing() {
    if (typingCounter < text.length) {
        textType.innerHTML += text.charAt(typingCounter);
        typingCounter++;
        textTimeOut = setTimeout(typing, 35);
    }
}

function introTextType(){
    typingCounter = 0;
    text = `Do you think you have what it takes
            to become the next Pokemon World Champion?`;
    typing();
}

function trainerSelectTextType() {
    textType.textContent = "";
    textType.style.display = "flex";
    typingCounter = 0;
    text = `When you are ready, pick your trainer
    and test your abilities against the
    Elite Four!`;

    typing();
}

introTextType();

// Battle Text Type Opponent
let opponentTypeCounter = 0;
let opponentTextToType;

function opponentTyping() {
    if (opponentTypeCounter < opponentTextToType.length) {
        opponentTextContainer.innerHTML += opponentTextToType.charAt(opponentTypeCounter);
        opponentTypeCounter++;
        setTimeout(opponentTyping, 35);
    }
}

function opponentLoseTextOutput() {
    let randomText = Math.floor(Math.random() * 3);
    opponentTextContainer.textContent = "";
    opponentTypeCounter = 0;

    if(!gameOver) {
        switch(randomText) {
            case 0:
                opponentTextToType = `Pft... Lucky! Let's see you do that again.`;
                break;
    
            case 1:
                opponentTextToType = `Well played Kiddo, smarter than you look...`;
                break;
    
            case 2:
                opponentTextToType = `I'm impressed... but only slightly.`;
                break;
        }
    }
    
    else if(gameOver) {
        opponentTextToType = `Congratulations! You are the new World Champion!`;
    }

    opponentTyping();
}

function opponentWinTextOutput() {
    let randomText = Math.floor(Math.random() * 3);
    opponentTextContainer.textContent = "";
    opponentTypeCounter = 0;

    if(!gameOver) {
        switch(randomText) {
            case 0:
                opponentTextToType = `Hahaha... This is too easy!`;
                break;
    
            case 1:
                opponentTextToType = `Maybe you should study up next time...`;
                break;
    
            case 2:
                opponentTextToType = `This is boring...`;
                break;
        }
    }
    
    else if(gameOver) {
        opponentTextToType = `You lose! You have a lot to learn!`;
    }

    opponentTyping();
}

function opponentTieTextOutput() {
    let randomText = Math.floor(Math.random() * 3);
    opponentTextContainer.textContent = "";
    opponentTypeCounter = 0;

    switch(randomText) {
        case 0:
            opponentTextToType = `Okay... not bad, not bad!`;
            break;

        case 1:
            opponentTextToType = `You know what they say! Great, uh, great...`;
            break;

        case 2:
            opponentTextToType = `No blood...`;
            break;
    }

    opponentTyping();
}
