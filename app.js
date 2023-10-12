let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let overallWinner = "";

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

let computerChoice;
let playerChoice;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const score = document.querySelector('.score');

const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
const p5 = document.createElement('p');

function playRound(playerChoice,computerChoice){
    if(playerChoice == "ROCK" && computerChoice == "PAPER" ||
       playerChoice == "PAPER" && computerChoice == "SCISSOR" ||
       playerChoice == "SCISSOR" && computerChoice == "ROCK"){
            roundWinner = "Computer"
            computerScore++;
       }
    if(playerChoice == "ROCK" && computerChoice == "SCISSOR" ||
            playerChoice == "PAPER" && computerChoice == "ROCK" ||
            playerChoice == "SCISSOR" && computerChoice == "PAPER"){
                roundWinner = "Player"
                playerScore++;
            }
    if(playerChoice == computerChoice){
        roundWinner = "No one";
    }
    if(playerScore == 5){
        overallWinner = "Player!";
        score.appendChild(p4).innerHTML = "Overall Winner: " + overallWinner;
    }
    if(computerScore == 5){
        overallWinner = "Computer!";
        score.appendChild(p4).innerHTML = "Overall Winner: " + overallWinner;
    }
    if(playerScore == 5 || computerScore == 5){
        p1.style.display = 'none';
        p2.style.display = 'none';
        p3.style.display = 'none';
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissor").disabled = true;
        score.appendChild(p5).innerHTML = "Reload the page to start the game again!";
    }
}

 function game(){
    playRound(playerChoice,computerChoice);
    score.appendChild(p1).innerHTML = "Player Score: " + playerScore;
    score.appendChild(p2).innerHTML = "Computer Score: " + computerScore;
    score.appendChild(p3).innerHTML = "Round Winner: " + roundWinner; 
}

rock.addEventListener('click', e =>{
    computerChoice = getComputerChoice();
    playerChoice = "ROCK";
    game();
})
paper.addEventListener('click', e =>{
    computerChoice = getComputerChoice();
    playerChoice = "PAPER";
    game();
})
scissor.addEventListener('click', e =>{
    computerChoice = getComputerChoice();
    playerChoice = "SCISSOR";
    game();
})