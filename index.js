
const getComputerChoice = () => {
    const random = Math.random();
    if (random <= 0.3) 
        return "rock";
    else if (random <= 0.6) 
        return "paper";
    else 
        return "scissors";
};

const getHumanChoice = () => {
    return prompt("Enter input: (rock, paper, scissors)").toLowerCase();
};

humanScore = 0;
computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) 
        return "It's a tie!";

    if (humanChoice === "rock"){
        if (computerChoice === "paper") {
            computerScore += 1;
            console.log("You lose! Paper beats Rock");
        }
        else if (computerChoice === "scissors") {
            humanScore += 1;
            console.log("You win! Rock beats Scissors");

        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "rock") {
            humanScore += 1;
            console.log("You win! Paper beats Rock");
        }
        else if (computerChoice === "scissors") {
            computerScore += 1;
            console.log("You lose! Scissors beats Paper");
        }
    }
    else if (humanChoice === "scissors"){
        if (computerChoice === "rock") {
            computerScore += 1;
            console.log("You lose! Rock beats Scissors");
        }
        else if (computerChoice === "paper") {
            humanScore += 1;
            console.log("You win! Scissors beats Paper");
        }
    }
};


const playGame = () => {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`human score: ${humanScore}`);
    console.log(`computer score: ${computerScore}`);
}


playGame();


