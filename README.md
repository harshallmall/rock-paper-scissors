# Rock, Paper, Scissors Game – JavaScript

## What is Rock, Paper, Scissors ("RPS")?
- "RPS is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). As RPS is a simultaneous, zero-sum game, it has three possible outcomes: a draw, a win, or a loss. Rock beats Scissors, Scissors beats Paper, and Paper beats Rock." 
- Rock Paper Scissors, https://en.wikipedia.org/w/index.php?title=Rock_paper_scissors&oldid=1088384363 (last visited May 24, 2022).

## Version Updates
- The 1st version of RPS will not include a Graphical User Interface ("GUI") and only runs inside the console.
- The 2nd version of RPS will improve upon the first via the addition of a GUI, buttons, and text.

## Problem Solving Checklist
### Step One – Identifying the Problem
### Problem
- Create a JavaScript program that runs in the console and plays a single round of RPS against the Computer. 
- The results of the game will be returned from a function call and not from the console.log() method.
### Step Two – Planning the Solution
### Plan
(1) Start a new Git repository for the project.
(2) Create a blank HTML document with a script tag. 
- Yes, I understand that the best practice is to link an external .js file.
(3) Write a function named "computerPlay" that will randomly return either "Rock" or "Paper" or "Scissors" as a choice. 
- This function is used to make the computer play against the user. I will use the console to make sure this function is returning the expected output before moving to the next step.
(4) Write a second function that plays a single round of RPS. 
- The function will need to take two parameters - the playerSelection and computerSelection, and then the function will need to return a string that declares the winner of the round, e.g., "You Lose! Paper beats Rock." 
- The function parameter "playerSelection" will be case-insensitive, so that users can input text in any variation, e.g., "rock, ROCK, RocK."
(5) Return the results of the second function call, not to console.log() method. 
- What is returned will be used later in the game, so I will test this function by using console.log to see the results.
(6) Write a third function called "game()" and call the "playRound" function inside of the function in order to play a 5-round game that keeps score and reports a winner or loser at the end. 
- This is a good opportunity to use a loop to iterate through the entire code 5 times in order to play 5 rounds of the game at once.
(7) Use console.log() to display the results of each round and the winner at the end.
(8) Use prompt() to get input from the user.
### Step Three – Executing the Strategy
### Execution

