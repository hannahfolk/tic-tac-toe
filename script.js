// Build out tic tac toe

// The game:
// Two players
// First player picks either X or O
// Second player gets what's remaining
// First player picks one of the 9 spots
// Second player gets one of the 8 remaining
// This continues until either all 9 spots are picked or someone hits a combination of 3

// Possible combos:
// [1, 2, 3]
// [1, 4 ,7]
// [1, 5, 9]
// [2, 5, 8]
// [3, 6, 9]
// [3, 5, 7]
// [4, 5, 6]
// [7, 8, 9]
const winList = [
  ["1", "2", "3"],
  ["1", "4", "7"],
  ["1", "5", "9"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["3", "5", "7"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

const playingSquares = document.getElementsByClassName("playing-square");
const h1El = document.getElementById("winner");
const player1Choices = [];
const player2Choices = [];

const tictactoe = (event) => {
  if (event.key === "Enter") {
    event.target.setAttribute("readonly", true);
    event.target.value = event.target.value.toUpperCase();

    const choice = event.target.id;

    const newWinList = winList.filter((combo) =>
      combo.includes(event.target.id)
    );

    if (event.target.value === "X") {
      player1Choices.push(choice);
      player1Choices.sort();
    } else if (event.target.value === "O") {
      player2Choices.push(choice);
      player2Choices.sort();
    }

    if (player1Choices.length > 2 || player2Choices.length > 2) {
      for (let i = 0; i < newWinList.length; i++) {
        if (newWinList[i].every((square) => player1Choices.includes(square))) {
          h1El.textContent = `Player ${event.target.value.toUpperCase()} wins.`;
        } else if (
          newWinList[i].every((square) => player2Choices.includes(square))
        ) {
          h1El.textContent = `Player ${event.target.value.toUpperCase()} wins.`;
        }
      }
    }
  }
};

for (let i = 0; i < playingSquares.length; i++) {
  playingSquares[i].addEventListener("keypress", tictactoe);
}

document.getElementById("reset").addEventListener("click", function () {
  location.reload();
});
