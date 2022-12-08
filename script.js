let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('button');
const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');

//this function returns rock/paper/scissors for computer
getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        computerSelection = 'Rock';
    } else if (random === 1) {
        computerSelection = 'Paper';
    } else if (random === 2) {
        computerSelection = 'Scissors';
    }
    return computerSelection;
}

//this function compares players choice with the computers', and increases the score
const playRound = (playerSelection) => {
    getComputerChoice();
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
    }//  else if (playerSelection === computerSelection) {
        // return 'draw';
    // }
    playerScoreElement.innerText = `Player Score: ${playerScore}`;
    computerScoreElement.innerText = `Computer Score: ${computerScore}`;
    // console.log(getComputerChoice);
}

//on click event returns rock/paper/scissors to playerSelection, and plays a round
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (playerScore < 5 && computerScore < 5) {
            playerSelection = e.target.innerText;
            playRound(playerSelection);
            if (playerScore === 5) {
                createConclusionScreen('winner');
            } else if (computerScore === 5) {
                createConclusionScreen('loser');
            }
        }
    })
})

//creates another pannel, declaring you as a winner/loser
const createConclusionScreen = (outcome) => {
    const body = document.querySelector('body');
    const conclusionScreen = document.createElement('div');
    conclusionScreen.classList.add('conclusion-screen');
    conclusionScreen.innerText = outcome;
    if (outcome === 'winner') {
        conclusionScreen.style.backgroundColor = 'lightskyblue';
    }
    body.append(conclusionScreen);
}