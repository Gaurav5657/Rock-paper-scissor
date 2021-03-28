"use strict";
// BUTTONS
const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("paper");
const SCISSOR = document.getElementById("scissor");
const FINALCHECK = document.getElementById("final-check");

const ALLWINNERLOSERDATA = [];

const computer = {
  title: "Computer",
  win: "Computer Win",
  lose: "Computer Lose",
  computerResponces: [],
  computerGenerator() {
    const randomNumberGenerator = Math.floor(Math.random() * 100);
    let computerResponce =
      randomNumberGenerator <= 33
        ? "Rock"
        : randomNumberGenerator <= 66
        ? "Paper"
        : "Scissor";
    this.computerResponces.push(computerResponce);
    return computerResponce;
  },
  winCondition() {},
  loseCondition() {},
  roundCondition() {},
};
const player = {
  title: "Player",
  win: "Player Win",
  lose: "Player Lose",
  playerResponces: [],

  winCondition() {},
  loseCondition() {},
  roundCondition() {},
};

const gameLogic = (playerr, computerr) => {
  if (playerr === "rock" && computerr === "paper") {
    return computer.win;
  } else if (playerr === "paper" && computerr === "rock") {
    return player.win;
  } else if (playerr === "rock" && computerr === "scissor") {
    return player.win;
  } else if (playerr === "scissor" && computerr === "rock") {
    return computer.win;
  } else if (playerr === "scissor" && computerr === "paper") {
    return player.win;
  } else if (playerr === "paper" && computerr === "scissor") {
    return computer.win;
  } else if (playerr === "scissor" && computerr === "scissor") {
    return "DRAW";
  } else if (playerr === "paper" && computerr === "paper") {
    return "DRAW";
  } else if (playerr === "rock" && computerr === "rock") {
    return "DRAW";
  } else if (playerr === "paper" && computer === "paper") {
    return "DRAW";
  }
};
const computerInput = () => {
  let computerMainResponce = computer.computerGenerator();
  computer.computerResponces.push(computerMainResponce);
  return computerMainResponce;
};

const playerInput = function (passed) {
  if (passed === "rock") {
    player.playerResponces.push("rock");
    return "rock";
  } else if (passed === "paper") {
    player.playerResponces.push("paper");
    return "paper";
  } else if (passed === "scissor") {
    player.playerResponces.push("scissor");
    return "scissor";
  }
};
const winnerForCurrentRound = (passed) => {
  let computerInputForThisRound = computerInput().toLowerCase();
  let playerInputForThisRound = playerInput(passed).toLowerCase();

  let winner = gameLogic(playerInputForThisRound, computerInputForThisRound);
  ALLWINNERLOSERDATA.push(winner);
  console.log(computerInputForThisRound, playerInputForThisRound, winner);
};
let computerWins = 0;
let playerWins = 0;
const finalWinner = () => {
  for (let index = 0; index < ALLWINNERLOSERDATA.length; index++) {
    if (ALLWINNERLOSERDATA[index] === "Player Win") {
      playerWins = playerWins + 1;
    } else if (ALLWINNERLOSERDATA[index] === "Computer Win") {
      computerWins = computerWins + 1;
    } else if (ALLWINNERLOSERDATA[index] === "DRAW") {
      break;
    }
  }

  if (computerWins > playerWins) {
    return "COMPUTER IS THE ULTIMATE WINNER";
  } else if (playerWins > computerWins) {
    return "PLAYER IS THE ULTIMATE WINNER";
  } else {
    return "DRAW";
  }
};
const executorFunction = (passed) => {
  winnerForCurrentRound(passed);
};

ROCK.addEventListener("click", () => {
  executorFunction("rock");
});
PAPER.addEventListener("click", () => {
  executorFunction("paper");
});
SCISSOR.addEventListener("click", () => {
  executorFunction("scissor");
});

FINALCHECK.addEventListener("click", () => {
  console.log(finalWinner());
});
