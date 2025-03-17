console.log("Hello World");

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

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    console.log("Welcome to Rock Paper Scissors!");
    console.log("We'll play 5 rounds. Best score wins!");
    
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final score: Computer ${computerScore} - You ${humanScore}`);
    } else {
        console.log(`It's a tie! Final score: ${humanScore} - ${computerScore}`);
    }
}

playGame();