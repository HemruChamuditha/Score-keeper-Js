const dropDownValue = document.querySelector(".drop-down-btn-value");
const dropDownMenu = document.querySelector(".dropdown-menu");

//Score Marks of 2 players
let playerOneScore = document.querySelector(".player-one-score");
let playerTwoScore = document.querySelector(".player-two-score");

//Buttons
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const reset = document.querySelector(".reset");

//Select option
let maxValue;
dropDownMenu.addEventListener("click", function (e) {
  resetValues();
  const value = e.target;
  dropDownValue.innerText = value.innerHTML;
  // console.log(`curent value : ${value.innerHTML}`);
  maxValue = value.innerText;
});

playerOne.addEventListener("click", function (e) {
  playerOneScore.innerText = parseInt(playerOneScore.innerText) + 1;
  console.log("playerone");
  console.log(parseInt(playerOneScore.innerText));
  if (parseInt(playerOneScore.innerText) < maxValue) {
  } else {
    playerOne.disabled = true;
    playerTwo.disabled = true;
    selectWinner();
  }
});

playerTwo.addEventListener("click", function (e) {
  console.log(parseInt(playerTwoScore.innerText));
  playerTwoScore.innerText = parseInt(playerTwoScore.innerText) + 1;
  if (parseInt(playerTwoScore.innerText) < maxValue) {
  } else {
    playerOne.disabled = true;
    playerTwo.disabled = true;
    selectWinner();
  }
});

function selectWinner() {
  if (parseInt(playerOneScore.innerText) > parseInt(playerTwoScore.innerText)) {
    console.log("player One wins");
    playerOneScore.style.color = "blue";
    playerTwoScore.style.color = "red";
  } else {
    console.log("player Two wins");
    playerOneScore.style.color = "red";
    playerTwoScore.style.color = "blue";
  }
}

reset.addEventListener("click", resetValues);

function resetValues() {
  console.log("reset");
  playerOne.disabled = false;
  playerTwo.disabled = false;
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  playerOneScore.style.color = "";
  playerTwoScore.style.color = "";
}
