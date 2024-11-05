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

function getHumanChoice() {
    let choice = prompt().toLowerCase();

    if (choice === "rock" 
        || choice === "paper" 
        || choice === "scissors") {
        console.log(`you chose ${choice}`);
        } else {
            console.log("Not an option");
        }
    
    return choice;
}

let humanScore = 0
let computerScore = 0




function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore = ++humanScore;
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock.");
        humanScore = ++humanScore;
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! scissors beats paper.") ;
        humanScore = ++humanScore;
    } else {
        console.log("You lose.");
        computerScore = ++computerScore
    }
}


while (humanScore < 5 && computerScore < 5) {
    playRound();
    console.log(`${humanScore} to ${computerScore}`);
    
}