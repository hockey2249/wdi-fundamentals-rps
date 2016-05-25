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
    var x = 'rock';
    var y = 'paper';
    var z = 'scissors';
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    console.log('player move = ' + playerMove + '; computer move = ' + computerMove);
    
    if((playerMove == z && computerMove == y) || (playerMove == x && computerMove == z) || (playerMove == y && computerMove == x)) {
        winner = 'player';
    } else if((computerMove == z && playerMove == y) || (computerMove == x && playerMove == z) || (computerMove == y && playerMove == x)) {
        winner = 'computer';
    } else if(playerMove === computerMove) {
        winner = 'tie';
    }
    return winner;
}

function startGame() {
    console.log('How many Wins to finish?');
    playto(prompt());
}

function playto(numtimes) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    do {
         console.log('player wins = ' + playerWins + '; computer wins = ' + computerWins);
        
        var userInput = getInput();
        var playerMove = getPlayerMove(userInput);
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove, computerMove);
        
        if(winner === 'player') {
            playerWins++;
        } else if(winner === 'computer') {
            computerWins++;
        }
        
    } while(playerWins < numtimes && computerWins < numtimes);
    
    console.log('Game Finished!!!');
    
    if(playerWins > computerWins) {
        console.log('You have won!!');
    } else {
        console.log('You have lost!!');
    }
    return [playerWins, computerWins];
}
startGame();
//playToFive();
