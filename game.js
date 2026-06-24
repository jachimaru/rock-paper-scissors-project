let humanScore = 0;
let computerScore = 0;
let win = 0
let compChoice = ''
let playerChoice = ''

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

function getHumanChoice() {
    playerChoice = prompt('Choose rock, paper, or scissors')
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        win = 0;
        console.log(win);
        return win;
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        win = 1;
        console.log(win);
        return win;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        win = 2;
        console.log(win);
        return win;
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        let player = getHumanChoice();
        let computer = getComputerChoice();
        console.log(player);
        console.log(computer);
        console.log(win);
        playRound(player, computer);
        if (win === 2) {
            humanScore += 1;
            console.log(`You won! Your score is ${humanScore} and the computer's is ${computerScore}!`);
        } else if (win === 1) {
            computerScore += 1;
            console.log(`You lost! Your score is ${humanScore} and the computer's is ${computerScore}!`);
        } else if (win === 0) {
            console.log(`It was a tie! Your score is ${humanScore} and the computer's is ${computerScore}!`);
        }
        console.log(`Round ${i}!`)
    }

    if (humanScore === computerScore) {
        console.log(`The game was a tie! ${humanScore} : ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log(`You won! ${humanScore} : ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lost! ${humanScore} : ${computerScore}`);
    }
}

playGame()


