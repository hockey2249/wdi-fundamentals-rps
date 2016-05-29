////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var getMove;
    while(move === null) {
        getInput();
    }
    if(move !== '') {
        getMove = move;
    } 
    return getMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    
    var compMove;
    
    if(move !== '') {
        compMove = move;
    } else {
        randomPlay();
    }
    return compMove;
}

function getWinner(playerMove,computerMove) {
    var winner;

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    if (playerMove === 'rock' && computerMove === 'scissors' || 
 	    playerMove === 'paper' && computerMove === 'rock' ||
 	    playerMove === 'scissors' && computerMove === 'paper') {
 		winner = "player";
 	} else if (playerMove === 'paper' && computerMove === 'scissors' ||
 	    playerMove === 'scissors' && computerMove === 'rock' ||
 	    playerMove === 'rock' && computerMove === 'paper') {
 		winner = "computer";
    } else {
    	winner = "tie";
	}

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    while (computerWins < 5) {
    	var player = getPlayerMove();
    	var comp = getComputerMove();
	    var winner = getWinner(player, comp);
	    if (winner === 'player') {
	    	playerWins++;
	    } else if (winner === 'computer') {
	    	computerWins++;
	    }
     }

    return [playerWins, computerWins];
}

console.log(playToFive())
