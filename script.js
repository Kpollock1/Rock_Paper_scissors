// Get a random number and convert it into "rock, paper, or scissors"
function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    
    // Pick rock, paper, scissors based on what number is generated
    if (choice === 1) {
        console.log("rock")
        return "rock"
    } else if (choice === 2) {
        console.log("paper")
        return "paper"
    } else {
        console.log("scissors")
        return "scissors"
    };
    

}

function getHumanChoice() {
    let choice = prompt().toLowerCase();

    if (choice === "rock" 
        || choice === "paper" 
        || choice === "scissors") {
        console.log(`you chose ${choice}`)
        } else {
            console.log("Not an option")
        }
    console.log(choice)
    return choice;
}

let humanScore = 0
let computerScore = 0

while (humanScore || computerScore < 5)

function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors.");
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock.");
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! scissors beats paper.") ;
    } else {
        console.log("You lose.");
    }cs
}



playRound()