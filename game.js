let humanScore = 0;
let computerScore = 0;
let win = 0
let compChoice = ''
let playerChoice = ''
const buttonRock = document.querySelector('#buttonRock');
buttonRock.textContent = 'Rock';
buttonRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

const buttonPaper = document.querySelector('#buttonPaper');
buttonPaper.textContent = 'Paper';
buttonPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})

const buttonScissors = document.querySelector('#buttonScissors');
buttonScissors.textContent = 'Scissors';
buttonScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})

const container = document.querySelector('div');
container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);

const results = document.querySelector('#results');
results.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
container.appendChild(results);

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        compChoice = 'rock';
        return compChoice;
    } else if (choice === 1) {
        compChoice = 'paper';
        return compChoice;
    } else {
        compChoice = 'scissors';
        return compChoice;
    }
}

function playRound(humanChoice, computerChoice) {
    const roundText = document.querySelector('#roundText');
    roundText.textContent = ''

    if (humanChoice === computerChoice) {
        win = 0;
        console.log(win);
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        win = 1;
        console.log(win);
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        win = 2;
        console.log(win);
    }

    if (humanScore >= 5 || computerScore >= 5) {
        roundText.textContent = 'The game is over!'
    } else if (win === 2) {
        humanScore += 1;
        roundText.textContent = `You won! You chose ${humanChoice}, the computer chose ${computerChoice}`
    } else if (win === 1) {
        computerScore += 1;
        roundText.textContent = `You lost! You chose ${humanChoice}, the computer chose ${computerChoice}`;
    } else if (win === 0) {
        roundText.textContent = `It was a tie! You chose ${humanChoice}, the computer chose ${computerChoice}`;
        const resetButton = document.querySelector('#reset');
        resetButton.textContent = 'Restart Game'
        container.appendChild(resetButton);

    } 
    results.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    container.appendChild(roundText);
}

