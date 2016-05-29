
'use strict';

function getInput() {
	let playerChoice = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
	return playerChoice;
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
function getPlayerMove(move) {
	return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner; 
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


