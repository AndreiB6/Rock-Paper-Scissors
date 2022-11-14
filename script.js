function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else if (computerChoice === 2) {
        return 'scissors';
    }
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        playerScore ++;
        return 'winner';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        computerScore ++;
        return 'loser';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore ++;
        return 'winner';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore ++;
        return 'loser';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++;
        return 'winner';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore ++;
        return 'loser';
    } else if (playerSelection === computerSelection) {
        return 'draw';
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playerSelection = prompt('rock paper or scissors');
        while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            playerSelection = prompt('try again pls');
        }
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`player score: ${playerScore}\ncomputer score: ${computerScore}`);
    }
}

game();

if (playerScore > computerScore) {
    console.log('You are the winner! gz gz! :))');
} else if (computerScore > playerScore) {
    console.log('You are a loser my friend :(');
} else {
    console.log(`It's a tie :|`);
}

/*
computer gets a random choice
ask user for 1 of those choices
it has to be a valid one
calculate and display the result
*/