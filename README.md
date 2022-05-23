# Rock, Paper, Scissors Game – JavaScript

## What is Rock, Paper, Scissors ("RPS")?
- RPS is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). As RPS is a simultaneous, zero-sum game, it has three possible outcomes: a draw, a win or a loss. Rock beats Scissors, Scissors beats Paper, and Paper beats Rock.

### The first iteration of this game will not include a Graphical User Interface ("GUI") and only runs inside the browser console.
### The second iteration of this game will improve upon the first by including a GUI, as well as buttons and text.

## Problem Solving Checklist
### Step One – Identifying the Problem
#### Problem
- Create a JS program from scratch that runs in the console and plays a single round of RPS against the Computer with the results of the game being returned from a function cal and not from the console.log() method.
### Step Two – Planning the Solution
#### Plan
- Start a new Git repository for the project.
- Create a blank HTML document with a script tag. Yes, I understand that the best practice is to link an external .js file.
- Write a function named "computerPlay" that will randomly return either "Rock" or "Paper" or "Scissors" as a choice. This function is used to make the computer play against the user. I will use the console to make sure this function is returning the expected output before moving to the next step.
- Write a second function that plays a single round of RPS. The function will need to take two parameters - the playerSelection and computerSelection, and then the function will need to return a string that declares the winner of the round, e.g., "You Lose! Paper beats Rock." The function parameter "playerSelection" will be case-insensitive, so that users can input text in any variation, e.g., "rock, ROCK, RocK."
- Return the results of the second function call, not to console.log() method. What is returned will be used later in the game, so I will test this function by using console.log to see the results.
- Write a third function called "game()." Call the "playRound" function inside of the third function in order to play a 5 round game that keeps score and reports a winner or loser at the end. This part is a good opportunity to use a loop to iterate through the entire code 5 times in order to play 5 rounds of the game at once.
- Use console.log() to display the results of each round and the winner at the end.
- Use prompt() to get input from the user.
### Step Three – Executing the Strategy

