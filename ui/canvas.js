const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ROWS;
let COLUMNS;
let CELL;

export function initCanvas(row, columns, cell) {
    ROWS = row;
    COLUMNS = columns;
    CELL = cell;
    
    canvas.height = ROWS * CELL;
    canvas.width = COLUMNS * CELL;
}

export function drawGrid(grid) {
    for (let x = 0; x < ROWS; x++) {
        for (let y = 0; y < COLUMNS; y++) {
            ctx.fillStyle = grid[x][y] === 0 ? "white" : "black";
            ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
        }
    }
}

export function drawStep(coordinate) {
    const x = coordinate[0], y = coordinate[1];
    ctx.fillStyle = "green";
    ctx.fillRect(x * CELL,  y * CELL, CELL, CELL);
}