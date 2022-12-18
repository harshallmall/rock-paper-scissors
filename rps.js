// Create two "let" variables to hold each player's score, as the variables will ultimately increment in value.
// Create a "constant" variable that holds all three choices.
// Add an event listener to each one of the three choices.
let playerScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choices');
// The callback function passed into addEventListener() method executes when a click occurs on one of the three choices.
// After the click event occurs, the selection is fetched and read via the value property.
// The value assigned to the choice is stored as a variable called playerChoice.
// The computer is then assigned three choices in an array, then the numbers of the choices are randomized.
// Call separate function that will be created below to invoke the comparison of choices and decision of winner/loser.
// Call separate function that will update the score of the players.
// Call seperate function that will check if a player has won based on the updated score.
choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        const playerChoice = this.value;
        const computerChoices = ["Rock", "Paper", "Scissors"];
        const computerChoice = computerChoices[Math.floor(Math.random() * 3)];
        gameChoices(playerChoice, computerChoice);
        gameScore();
        if (gameWinner()) {
            playerScore = computerScore = 0;
            gameScore();
            alert(winner);
        }
    });
});
// Create a function to compare the choices between the two players and decide the winner of (x) round.
// The possibility of a tie is separate from the other choices and shortens the necessary if/else statement for comparison.
// Increment the score for either player depending on the outcome of the comparisons.
function gameChoices(playerChoice, computerChoice) {
    const gameChoice = `${playerChoice} vs. ${computerChoice}`;
    if (playerChoice === computerChoice) {
        alert(`${gameChoice} = Tie`);
        return;
    }
    if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
            alert(`${gameChoice} = Player wins`);
            playerScore++;
        } else {
            alert(`${gameChoice} = Player loses`);
            computerScore++
        }
    }
    else if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            alert(`${gameChoice} = Player wins`);
            playerScore++;
        } else {
            alert(`${gameChoice} = Player loses`);
            computerScore++;
        }
    }
    else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            alert(`${gameChoice} = Player wins`);
            playerScore++;
        } else {
            alert(`${gameChoice} = Player loses`);
            computerScore++;
        }
    }
}
// Create a function to update each player's score after each round using the elements created in HTML.
function gameScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}
// Create a function to check if a player reaches five points.
// Use the ternary conditional operator (?) to choose an alternative winning message depending on score.
// Update the score in the round play function.
function gameWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "Player wins" : "Computer wins";
        return true;
    }
    return false;
}