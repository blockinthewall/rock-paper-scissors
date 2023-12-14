let playBtn = document.getElementById("playbutton");
let gameScreen = document.getElementById("game-screen");
let playAgainBtn = document.getElementById("playagainbutton");
let playerSelection;
let computerSelection;
let buttonPressed;
let options = ["rock", "paper", "scissors"];
let choices = document.querySelectorAll(".player-choices");
let matters = document.getElementsByClassName("rock paper scissors");
let mattersCopy = Array.from(matters);
let whatBeatsWhat = { // defining the who beats scenario
  "rock": "scissors",
  "paper": "rock",
  "scissors": "paper",
};

let playerScoreCount = document.getElementById("player-score-count")
let computerScoreCount = document.getElementById("computer-score-count")
let choicesMade = document.getElementById("choicesMade");
let choicesRule = document.getElementById("choicesRule");

let playerScore = 0;
let computerScore = 0;   
let result = document.getElementById("result");

/* removed piece of code. worked but too long.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      console.log("No one wins! Try again")  
    } else if (playerSelection=== "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! " + playerSelection + " is bigger than " + computerSelection);

    } else {
        console.log("You lose! " + computerSelection + " is bigger than " + playerSelection);

    }
} 
*/

// trigger start
playBtn.addEventListener("click", startGame);

function startGame() {
  playBtn.style.display="none";
  gameScreen.style.visibility="visible";
}

buttonPressed = (e) => { // Define buttonPressed function outside the loop
  playerSelection = e.target.className;
  console.log(e.target.className);
  playRound();
};

for (let choice of choices) {
  choice.addEventListener("click", buttonPressed); // Attach buttonPressed function as event listener
}

function playRound() {
  computerSelection = options[Math.floor(Math.random() * options.length)];
  choicesMade.textContent = `Computer chose ${computerSelection}`;

  if (playerSelection === computerSelection) {
    choicesRule.textContent = "IT'S A DRAW"
  }
  else if (whatBeatsWhat[playerSelection] === computerSelection) {
    playerScore++;
    playerScoreCount.textContent = `Player Score: ${playerScore}`;
    choicesRule.textContent = `YOU WON! ${playerSelection} is bigger than ${computerSelection}`;
  } else
   {
    computerScore++;
    computerScoreCount.textContent = `Computer Score: ${computerScore}`;
    choicesRule.textContent = `YOU LOSE! ${computerSelection} is bigger than ${playerSelection}`;
  }
  setTimeout(() => (choicesRule.textContent = ""), 4000);
  setTimeout(() => (choicesMade.textContent = "Waiting for player"), 4000);
  game();
}

// 5 round game
function game() {
if (playerScore === 5 || computerScore === 5) {
  result.style.visibility="visible";
  playAgainBtn.style.visibility="visible";
 
} if (playerScore === 5) {
    result.innerHTML = "You Won!";

  } else if (computerScore === 5 ) {
      result.innerHTML = "You Lost!";  
  }

  playAgainBtn.addEventListener("click", playAgain);
}

function playAgain() {
  result.style.visibility="hidden";
  playAgainBtn.style.visibility="hidden";
  computerScore = 0;
  computerScoreCount.textContent = `Computer Score: ${computerScore}`;
  playerScore = 0;
  playerScoreCount.textContent = `Player Score: ${playerScore}`;
}