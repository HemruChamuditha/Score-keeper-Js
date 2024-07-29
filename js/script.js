const dropDownValue = document.querySelector(".drop-down-btn-value");
const dropDownMenu = document.querySelector(".dropdown-menu");

//Score Marks of 2 players
const playerOneScore = document.querySelector(".player-one-score");
const playerTwoScore = document.querySelector(".player-two-score");

//Buttons
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");


//Select option
var maxValue;
dropDownMenu.addEventListener("click", function (e) {
  const value = e.target;
  dropDownValue.innerText = value.innerHTML;
  maxValue = value.innerText;

  playerOne.addEventListener("click", function (e) {
    console.log(parseInt(playerOneScore.innerText));
    if (parseInt(playerOneScore.innerText) < maxValue) {
      playerOneScore.innerText = parseInt(playerOneScore.innerText) + 1;
    } else {
    }
  });

  playerTwo.addEventListener("click", function (e) {
    console.log(parseInt(playerTwoScore.innerText));
    if (parseInt(playerTwoScore.innerText) < maxValue) {
      playerTwoScore.innerText = parseInt(playerTwoScore.innerText) + 1;
    } else {
    }
  });

  if(parseInt(playerOneScore.innerText) > parseInt(playerTwoScore.innerText) ){
        console.log("player 1 win");
  }
});
