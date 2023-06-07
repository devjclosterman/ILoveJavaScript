// Connect Four Game

// Initialize the game state
const board = [];
const columns = 7;
const rows = 6;
let currentPlayer = 'red';
let gameOver = false;

// Create the game board
function createBoard() {
  for (let row = 0; row < rows; row++) {
    board[row] = [];
    for (let col = 0; col < columns; col++) {
      board[row][col] = null;
    }
  }
}

// Render the game board
function renderBoard() {
  const container = document.getElementById('board');
  container.innerHTML = '';

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.column = col;
      cell.dataset.row = row;

      if (board[row][col]) {
        cell.classList.add(board[row][col]);
      }

      container.appendChild(cell);
    }
  }
}

// Check if a player has won
function checkWin(row, col) {
  const directions = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1],  // Right
    [-1, -1],// Up-Left
    [-1, 1], // Up-Right
    [1, -1], // Down-Left
    [1, 1]   // Down-Right
  ];

  const color = board[row][col];

  for (let dir of directions) {
    let count = 1;
    const [dx, dy] = dir;
    let newRow = row + dx;
    let newCol = col + dy;

    while (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns && board[newRow][newCol] === color) {
      count++;
      newRow += dx;
      newCol += dy;
    }

    newRow = row - dx;
    newCol = col - dy;

    while (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns && board[newRow][newCol] === color) {
      count++;
      newRow -= dx;
      newCol -= dy;
    }

    if (count >= 4) {
      return true;
    }
  }

  return false;
}

// Handle a player's move
function makeMove(column) {
  if (gameOver) return;

  // Find the lowest available row in the selected column
  for (let row = rows - 1; row >= 0; row--) {
    if (!board[row][column]) {
      board[row][column] = currentPlayer;

      // Check if the current player has won
      if (checkWin(row, column)) {
        gameOver = true;
        alert(`${currentPlayer} wins!`);
        return;
      }

      // Switch to the other player
      currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
      break;
    }
  }

  // Check if the board is full (tie)
  if (!board.flat().includes(null)) {
    gameOver = true;
    alert('It\'s a tie!');
  }
}
  renderBoard();
