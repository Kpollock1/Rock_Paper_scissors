
// Get a random number and convert it into "rock, paper, or scissors"
function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    // Pick rock, paper, scissors based on what number is generated
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const choiceRock = document.querySelector("button.rock");
choiceRock.addEventListener("click", () => playRound(""));

const choicePaper = document.querySelector("button.paper");
choicePaper.addEventListener("click", () => playRound("paper"));

const choiceScissors = document.querySelector("button.scissors");
choiceScissors.addEventListener("click", () => playRound("scissors"));


let humanScore = 0
let computerScore = 0

function playRound(humanSelection) {
    const computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
        announcement("It's a tie!");
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        announcement("You win! Rock beats scissors.");
        humanScore = ++humanScore;
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        announcement("You win! Paper beats rock.");
        humanScore = ++humanScore;
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        announcement("You win! scissors beats paper.");
        humanScore = ++humanScore;
    } else {
        announcement("You lose.");
        computerScore = ++computerScore;
    }

    console.log(`${humanScore} to ${computerScore}`);

    if (humanScore >= 5) {
        announcement("You are the winner!")
    }

    if (computerScore >= 5) {
        announcement("You are the loser!")
    }
}

function announcement(message) {
    const winner = document.querySelector("#winner");
    const content = document.createElement("div")
    content.classList.add("content");
    content.textContent = message;
    winner.appendChild(content);
}