
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

// humanScore = 0;
// computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) 
        return 0;

    if (humanChoice === "rock"){
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            return -1
        }
        else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            return 1

        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            return 1
        }
        else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            return -1
        }
    }
    else if (humanChoice === "scissors"){
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            return -1;
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            return 1
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


// playGame();

// buttons
const playBtn = document.querySelector("#play-game-btn");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");

const buttons = [rockBtn, paperBtn, scissorBtn]
// result
const status = document.querySelector("#game-status")
const humanScore = document.querySelector("#human-score")
const computerScore = document.querySelector("#computer-score")

let humanScoreVal = 0;
let computerScoreVal = 0;

const enableControlBtns = () => {
    buttons.forEach(btn => {
        btn.disabled = false;
    })
}


const disableControlBtns = () => {
    buttons.forEach(btn => {
        btn.disabled = true;
    })
}

const resetGame = () => {
    disableControlBtns();
    playBtn.disabled = false;
    status.innerText = "No"
    humanScoreVal = 0;
    computerScoreVal = 0;
    computerScore.innerText = computerScoreVal
    humanScore.innerText = humanScoreVal
}

const handleResult = (result) => {
    if (result === 0)
        alert("It's a tie!");
    else if (result === 1) {
        alert("Human has won the round!")
        humanScoreVal += 1;
    } else if (result === -1) {
        alert ("Computer has won the round!")
        computerScoreVal += 1;
    }

    if (humanScoreVal === 5){
        alert("Human has won the game!")
        resetGame()
        return;
    }
    if (computerScoreVal === 5) {
        alert("Computer has won the game!")
        resetGame()
        return;
    }
    
    computerScore.innerText = computerScoreVal;
    humanScore.innerText = humanScoreVal;
}



resetGame();


rockBtn.addEventListener("click", (e) => {
    const computer = getComputerChoice();
    const result = playRound("rock", computer);
    handleResult(result)
    
})

paperBtn.addEventListener("click", (e) => {
    const computer = getComputerChoice();
    const result = playRound("paper", computer);
    handleResult(result)
    
})

scissorBtn.addEventListener("click", (e) => {
    const computer = getComputerChoice();
    const result = playRound("scissors", computer);
    handleResult(result)
    
})

playBtn.addEventListener("click", (e) => {
    status.innerText = "Yes"
    playBtn.disabled = true
    enableControlBtns();
})

