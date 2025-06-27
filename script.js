let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const msgEl = document.getElementById("msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const removeGlows = () => {
  document.querySelectorAll("img").forEach(img => {
    img.classList.remove("glow-green", "glow-red", "glow-gray");
  });
};

const drawGame = (userChoice) => {
  msgEl.textContent = "It's a Draw!";
  msgEl.style.background = "gray";
  msgEl.style.color = "white";

  const userImg = document.querySelector(`#${userChoice} img`);
  userImg.classList.add("glow-gray");
};

const showWinner = (userWin, userChoice, compChoice) => {
  const userImg = document.querySelector(`#${userChoice} img`);
  const compImg = document.querySelector(`#${compChoice} img`);

  if (userWin) {
    userScore++;
    userScoreEl.textContent = userScore;
    msgEl.textContent = `You Win! ${userChoice} beats ${compChoice}`;
    msgEl.style.background = "green";
    msgEl.style.color = "blanchedalmond";
    userImg.classList.add("glow-green");
    compImg.classList.add("glow-red");
  } else {
    compScore++;
    compScoreEl.textContent = compScore;
    msgEl.textContent = `You Lose! ${compChoice} beats ${userChoice}`;
    msgEl.style.background = "crimson";
    msgEl.style.color = "blanchedalmond";
    userImg.classList.add("glow-red");
    compImg.classList.add("glow-green");
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  removeGlows();

  if (userChoice === compChoice) {
    drawGame(userChoice);
  } else {
    let userWin = true;
    if (
      (userChoice === "rock" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "rock")
    ) {
      userWin = false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScoreEl.textContent = "0";
  compScoreEl.textContent = "0";

  msgEl.textContent = "Play Your Turn";
  msgEl.style.background = "linear-gradient(to right, #0f9b8e, #0b5f6f)";
  msgEl.style.color = "blanchedalmond";

  removeGlows();
});

