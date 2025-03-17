let humanScore = 0;
let computerScore = 0;
const winScore = 5;
let gameActive = true;
let currentRound = 1;

const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const roundNumber = document.getElementById('round-number');
const playerChoiceDisplay = document.getElementById('player-choice-display');
const computerChoiceDisplay = document.getElementById('computer-choice-display');
const playerChoiceText = document.getElementById('player-choice-text');
const computerChoiceText = document.getElementById('computer-choice-text');
const resetButton = document.getElementById('reset-game');

document.getElementById('rock').addEventListener('click', () => {
    if (gameActive) playRound('rock', getComputerChoice());
});
document.getElementById('paper').addEventListener('click', () => {
    if (gameActive) playRound('paper', getComputerChoice());
});
document.getElementById('scissors').addEventListener('click', () => {
    if (gameActive) playRound('scissors', getComputerChoice());
});
resetButton.addEventListener('click', resetGame);

function getComputerChoice() {
    const randomNumber = Math.random();
    
    if (randomNumber < 0.34) {
        return "rock";
    } else if (randomNumber < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function updateChoiceDisplay(choice, isPlayer) {
    const display = isPlayer ? playerChoiceDisplay : computerChoiceDisplay;
    const textDisplay = isPlayer ? playerChoiceText : computerChoiceText;
    const iconElement = display.querySelector('.choice-icon');
    
    textDisplay.textContent = choice;
    
    if (choice === 'rock') {
        iconElement.textContent = '✊';
    } else if (choice === 'paper') {
        iconElement.textContent = '✋';
    } else if (choice === 'scissors') {
        iconElement.textContent = '✌️';
    } else {
        iconElement.textContent = '?';
    }
}

function playRound(humanChoice, computerChoice) {
    updateChoiceDisplay(humanChoice, true);
    updateChoiceDisplay(computerChoice, false);
    
    if (humanChoice === computerChoice) {
        resultText.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultText.textContent = "You win!";
    } else {
        computerScore++;
        resultText.textContent = "Computer wins!";
    }
    
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    
    currentRound++;
    roundNumber.textContent = currentRound;
    
    if (humanScore >= winScore || computerScore >= winScore) {
        endGame();
    }
}

function endGame() {
    gameActive = false;
    
    if (humanScore >= winScore) {
        resultText.textContent = "Game over! You win!";
    } else {
        resultText.textContent = "Game over! Computer wins!";
    }
    
    const gameOver = document.createElement('div');
    gameOver.className = 'game-over';
    
    const gameOverText = document.createElement('div');
    gameOverText.textContent = humanScore >= winScore ? 
        "You are the champion!" : 
        "Better luck next time!";
    
    const finalScore = document.createElement('div');
    finalScore.textContent = `Final Score: ${humanScore} - ${computerScore}`;
    finalScore.style.fontSize = '24px';
    finalScore.style.marginTop = '20px';
    
    const playAgain = document.createElement('button');
    playAgain.textContent = 'Play Again';
    playAgain.style.marginTop = '30px';
    playAgain.style.padding = '10px 20px';
    playAgain.style.fontSize = '18px';
    playAgain.style.backgroundColor = '#ab7826';
    playAgain.style.color = 'white';
    playAgain.style.border = 'none';
    playAgain.style.borderRadius = '5px';
    playAgain.style.cursor = 'pointer';
    
    playAgain.addEventListener('click', () => {
        document.body.removeChild(gameOver);
        resetGame();
    });
    
    gameOver.appendChild(gameOverText);
    gameOver.appendChild(finalScore);
    gameOver.appendChild(playAgain);
    
    document.body.appendChild(gameOver);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;
    gameActive = true;
    
    humanScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    roundNumber.textContent = '1';
    resultText.textContent = 'Choose to start!';
    
    updateChoiceDisplay('None', true);
    updateChoiceDisplay('None', false);
}
