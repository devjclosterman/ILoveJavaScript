 //Connect Four
 //Initialize the game state

const board = [];
const columns = 7;
const rows = 6;
let currentPlayer = 'red';
let gameOver = false;

//Create the game board
function createBoard() {
    for(let row = 0; row < rows; rows++) {
        board[row] = [];
        console.log(board)
        for(let col = 0; col < columns; col++) {
            board[row][col] = null;
        }
    }
}

//Render the game board
function renderBoard() {
    const container = document.getElementById('board');
    container.innerHTML = '';

    for(let row = 0; row < row; row++) {
        for(let col = 0; col < columns; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.column = col;
            cell.dataset.row = row;

            if(board[row][col]) {
                cell.classList.add(board[row][col]);
            }
            container.appendChild(cell);
        }
    }
}

//Check if a player has won    
function checkWin(row, col) {
    const directions = [
        [-1, 0], //up
        [1, 0], //down
        [0, -1], //left
        [0, 1], //right
        [-1, -1],//Up-left
        [-1, 1],//up-right
        [1, -1],//Down-Left
        [1, 1]
    ];
}