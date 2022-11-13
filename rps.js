// create the variable that holds the array of choices
const options = ["#rock", "#paper", "#scissors"];

// game score options
let playerScore = 0;
let computerScore = 0;
let ties = 0;

// function to define computer's selection parameters
function computerPlay() {
    const computerOptions = options[Math.floor(Math.random() * options.length)];
    return computerOptions;
}

// function to define player's selection parameters
function playerPlay() {
    const playerOptions = prompt("Rock, Paper, Scissors");
    const playerChoices = playerOptions.toLowerCase();
    return playerOptions || playerChoices;
}

// function to define the parameters of one round of game play
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        ties++;
    }

    if (playerSelection == options[0] && computerSelection == options[2]) {
        playerScore++;
        return "Player wins round";
    } else if (playerSelection == options[0] && computerSelection == options[1]) {
        computerScore++;
        return "Computer wins round";
    } else if (playerSelection == options[1] && computerSelection == options[0]) {
        playerScore++;
        return "Player wins round";
    } else if (playerSelection == options[1] && computerSelection == options[2]) {
        computerScore++;
        return "Computer wins round";
    } else if (playerSelection == options[2] && computerSelection == options[0]) {
        computerScore++;
        return "Computer wins round";
    } else if (playerSelection == options[2] && computerSelection == options[1]) {
        playerScore++;
        return "Player wins round";
    } else {
        return "Play Again"
    }
}

// function to define the game for five rounds with score keeping
function game() {
    for (let i = 0; i <= 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(`[Round ${i}] Player: ${playerSelection} vs. Computer: ${computerSelection}`);
        console.log(`[Score] Player: ${playerScore} vs. Computer: ${computerScore}`);
    }
    if (playerScore === 3 && computerScore <= 2) {
        console.log("Player wins game");
    } 
    if (computerScore === 3 && playerScore <= 2) {
        console.log("Computer wins game")
    }
}

// initialize the game function inside the console
game();

const clickOne = document.querySelector("#rock"); 
clickOne.addEventListener('click', () => {playRound;});
const clickTwo = document.querySelector("#paper");
clickTwo.addEventListener('click', () => {playRound;});
const clickThree = document.querySelector("scissors");
clickThree.addEventListener("click", () => {playRound;}); 