const startBtn = document.querySelector('#start-btn');
const homeScreen = document.querySelector('#home-screen');
const gameScreen = document.querySelector('#game-screen');
const playerNameInput = document.querySelector('#player-name');
const welcomeMessage = document.querySelector('#welcome-message');
const choices = document.querySelectorAll('.choice');
const resultDisplay = document.querySelector('#result');
const scoreDisplay = document.querySelector('#score');
const endScreen = document.querySelector('#end-screen');
const finalMessage = document.querySelector('#final-message');
const restartBtn = document.querySelector('#restart-btn');
const highScoreDisplay = document.querySelector('#high-score');
const playerImg = document.querySelector('#player-img');
const computerImg = document.querySelector('#computer-img');

let highScore = Number(localStorage.getItem('highScore')) || 0;
highScoreDisplay.innerText = highScore;

startBtn.addEventListener('click', startGame);

function startGame() {
  const playerName = playerNameInput.value; 
if (playerName === ""){
    alert("Please enter your name to start the game!");
    return;
  }
  homeScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  welcomeMessage.textContent = `Welcome, ${playerName}!`;


}
let score = 0;
let rounds = 0;
const maxRounds = 5;
choices.forEach(choice => {
  choice.addEventListener('click', playGame);
});


function playGame(event) {
document.querySelector("#choices-display").style.display = "flex";
    
    rounds++;
    let outcome = "";
    resultDisplay.classList.remove("win", "lose");
    const playerChoice = event.target.dataset.choice; 

const options = ['rock', 'paper', 'scissors'];
const computerChoice = options[Math.floor(Math.random() * options.length)];

let result = "";
if (playerChoice === computerChoice) {
    result = "It's a tie!";
    outcome = "tie";
}
else if(
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
) {
    result = "You win! 🎉";
    outcome = "win";
    score++;
} else {
    result = "You lose! 😢";
    outcome = "lose";

}

const imageMap = {
  rock: "images/rock.jpg",
  paper: "images/paper.jpg",
  scissors: "images/scissors.jpg"
};

playerImg.src = imageMap[playerChoice];
computerImg.src = imageMap[computerChoice];


playerImg.classList.remove("choice-pop");
computerImg.classList.remove("choice-pop");

setTimeout(() => {
  playerImg.classList.add("choice-pop");
  computerImg.classList.add("choice-pop");
}, 10);


resultDisplay.innerText = `You ${playerChoice}, computer ${computerChoice}. ${result}`;
scoreDisplay.innerText = score;

if(outcome === "win"){
    resultDisplay.classList.add("win");
} else if (outcome === "lose"){
    resultDisplay.classList.add("lose");
}

if (rounds >= maxRounds){
    endGame();

}
if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
    highScoreDisplay.innerText = highScore;
  
    highScoreDisplay.style.color = 'green';
    highScoreDisplay.style.animation = 'bounce 1s';
    setTimeout(() => {
        highScoreDisplay.style.animation = '';
    }, 1000);
}
}

function endGame() {
    console.log("Game Over! Final Score:", score);
    choices.forEach(choice => choice.disabled = true);
    gameScreen.style.display = 'none';
    endScreen.style.display = 'block';
    finalMessage.textContent = `Game Over! Your final score is ${score} out of ${maxRounds}.`;  
}
restartBtn.addEventListener('click', restartGame);

function restartGame() {
    choices.forEach(choice => choice.disabled = false);
    score = 0;
    rounds = 0;
    scoreDisplay.innerText = score;
    resultDisplay.innerText = "";
    endScreen.style.display = 'none';
    homeScreen.style.display = 'block';
}
    
