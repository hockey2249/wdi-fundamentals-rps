////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

var rounds = 0;
var winner;
var playerMove;
var computerMove;
var playerWins = 0;
var computerWins = 0;
var playerCompTies = 0;

function getInput() {
   playerMove = prompt("Choose 'rock', 'paper', or 'scissors'. Or hit enter or any character for a random selection.");
   
   if (playerMove === "rock" || playerMove === "paper" || playerMove === "scissors") {
   		console.log("You have chosen: " + playerMove.toUpperCase());
        return playerMove;
   	} else {
   		playerMove = randomPlay();
   		console.log("Your randomized move is: " + playerMove.toUpperCase());
   		return playerMove;
    }
}

function randomPlay() {
	var randomNumber = Math.random();
	if (randomNumber < 0.33) {
		return 'rock';
	} else if (randomNumber < 0.66) {
		 return 'paper';
	} else {
        return 'scissors';
	}
}

getPlayerMove = function(move) {
    if (move === "rock" || move === "paper" || move === "scissors") {
    	playerMove = move;
    	console.log("You chose " + playerMove.toUpperCase() + ".");
    	return playerMove;
    } else {
    	return getInput();
    }
};

var getComputerMove = function(move) {
    if (move === "rock" || move === "paper" || move === "scissors") {
        	computerMove = move;
        console.log("You have chosen to play " + computerMove.toUpperCase() + " for the computer.");
        return computerMove;
        } else {
        computerMove = randomPlay();
        console.log("The Computer randomly chose: " + computerMove.toUpperCase());
        return computerMove;
        }
};

var getWinner = function() {
    if ((playerMove === "rock" && computerMove === "rock") || (playerMove === "paper" && computerMove === "paper") || (playerMove === "scissors" && computerMove === "scissors")) {
        winner = "tie";
        playerCompTies += 1;
        rounds += 1;

    } else if ((playerMove === "rock" && computerMove === "paper") || (playerMove === "paper" && computerMove === "scissors") || (playerMove === "scissors" && computerMove === "rock")) {
        winner = "computer";
        computerWins += 1;
        rounds += 1;

    } else {
        winner = "player";
        playerWins += 1;
        rounds += 1;
    }
    console.log("The winner for round " + rounds + " is: " + winner.toUpperCase());
    return winner;
};

var playToFive = function() {
   	if (playerWins < 5 && computerWins < 5) {
   		console.log("The score for round " + rounds + " is player: " + playerWins + " to computer: " + computerWins + ". With " + playerCompTies + " ties.\n");
		    getPlayerMove();
			getComputerMove();
			getWinner();
			playToFive();
   	} else if (playerWins === 5) {
		return console.log("You won!");
	} else if (computerWins === 5) {
		return console.log("The Computer Won :(");
	} else {
		return console.log("You have counted to infinity.");
	}
};

getPlayerMove('rock');
getComputerMove('rock');
getWinner();
playToFive();
