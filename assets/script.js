let playerScore = 0;
let cpuScore = 0;
let draw = 0;

var gameHistory = [];

function playGame(playerMove) {
    if (playerScore >= 5 || cpuScore >= 5) {
      return; // Prevent playing after someone has already won
    }
  
    let cpuMove = generateComputerMove();
    showComputerMove(cpuMove);
  
    if (playerMove === cpuMove) {
      showResult("Draw");
      draw += 1;
    } else if (playerMove == "Rock") {
      if (cpuMove == "Paper") {
        showResult("System Wins");
        cpuScore += 1;
      } else {
        showResult("You Win");
        playerScore += 1;
      }
    } else if (playerMove == "Paper") {
      if (cpuMove == "Rock") {
        showResult("You Win");
        playerScore += 1;
      } else {
        showResult("System Wins");
        cpuScore += 1;
      }
    } else if (playerMove == "Scissors") {
      if (cpuMove == "Rock") {
        showResult("System Wins");
        cpuScore += 1;
      } else {
        showResult("You Win");
        playerScore += 1;
      }
    }
  
    // Update scoreboard
    document.getElementById("wins").innerText = playerScore;
    document.getElementById("losses").innerText = cpuScore;
    document.getElementById("draws").innerText = draw;
  
    // Push to history (optional)
    gameHistory.push({ playerMove, cpuMove });
  
    // Check for game over
    if (playerScore === 5 || cpuScore === 5) {
      endGame();
    }
  }
  


document.getElementById("rock").addEventListener("click", playRock);

document.getElementById("paper").addEventListener("click", playPaper);

document.getElementById("scissors").addEventListener("click", playScissors);

document.getElementById("submit").addEventListener("click", getUsername);

function getUsername() {
  //get username value using id.value and store it in a variable: userName
  var userName = document.getElementById("user").value;
  //create if statement checking the value var userName is true or fontVariantAlternates
  if (userName) {
    console.log(true);
    document.getElementById("userChoice").innerText = userName;
    document.getElementById("currentUser").innerText = userName + "!" + " ";
    document.getElementById("user").value = null;
  } else alert("Please Enter Valid Username");
}

function playRock() {
  playGame("Rock");
  const playerChoice = document.getElementById("playerchoice");
  playerChoice.innerText = "Rock";
}

function playPaper() {
  playGame("Paper");
  const playerChoice = document.getElementById("playerchoice");
  playerChoice.innerText = "Paper";
}

function playScissors() {
  playGame("Scissors");
  const playerChoice = document.getElementById("playerchoice");
  playerChoice.innerText = "Scissors";
}

function generateComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "Rock";
  else if (randomNumber > 0.33 && randomNumber < 0.66) return "Paper";
  return "Scissors";
}

function showComputerMove(move) {
  const displayElement = document.getElementById("computerMove");
  displayElement.innerText = move;
}
function showResult(result) {
  const displayElement = document.getElementById("results");
  displayElement.innerHTML = "<b>" + result + "!" + "</b>";
}

function endGame() {
    const resultDisplay = document.getElementById("results");
    const winner = playerScore === 5 ? "🎉You Won the Game!" : "💻 System Won the Game!";
    resultDisplay.innerHTML = "<b>" + winner + "</b>";
  
    // Disable choice buttons
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  
    // Optional: style disabled buttons
    document.querySelectorAll(".choice").forEach(btn => {
      btn.style.opacity = 0.5;
      btn.style.cursor = "not-allowed";
    });
    document.getElementById("playAgain").style.display = "inline-block";
  }
  document.getElementById("playAgain").addEventListener("click", function () {
  playerScore = 0;
  cpuScore = 0;
  draw = 0;
  gameHistory = [];

  document.getElementById("wins").innerText = 0;
  document.getElementById("losses").innerText = 0;
  document.getElementById("draws").innerText = 0;

  document.getElementById("results").innerHTML = "";
  document.getElementById("computerMove").innerText = "";
  document.getElementById("playerchoice").innerText = "";

  // Re-enable buttons
  document.querySelectorAll(".choice").forEach(btn => {
    btn.disabled = false;
    btn.style.opacity = 1;
    btn.style.cursor = "pointer";
  });

  document.getElementById("playAgain").style.display = "none";
});