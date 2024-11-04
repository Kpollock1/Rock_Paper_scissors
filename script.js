// Get a random number and convert it into "rock, paper, or scissors"
function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log(choice)
    // Pick rock, paper, scissors based on what number is generated
    if (choice = 1) {
        return "rock";
    } else if (choice = 2) {
        return "paper";
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice())

    

