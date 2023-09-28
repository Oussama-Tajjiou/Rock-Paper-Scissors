let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    switch(random){
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSOR";
        break;
    }
}

let computerChoice = getComputerChoice();
let playerChoice = prompt('Enter a selection: Rock/Paper/Scissor').toUpperCase();

function playRound(playerChoice,computerChoice){
    if(playerChoice == "ROCK" && computerChoice == "PAPER" ||
       playerChoice == "PAPER" && computerChoice == "SCISSOR" ||
       playerChoice == "SCISSOR" && computerChoice == "ROCK"){
            roundWinner = "Computer"
            computerScore++
            return "You Lose!";
       }
    else if(playerChoice == "ROCK" && computerChoice == "SCISSOR" ||
            playerChoice == "PAPER" && computerChoice == "ROCK" ||
            playerChoice == "SCISSOR" && computerChoice == "PAPER"){
                roundWinner = "Player"
                playerScore++
                return "You Win!";
            }
    else if(playerChoice == computerChoice){
        roundWinner = "No one"
        return "Draw!";
    }
    else{
        return "Enter a proper selection";
    }
}

function game(){
    playRound(playerChoice,computerChoice);
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundWinner);
}

game();