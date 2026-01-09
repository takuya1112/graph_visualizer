export function drawGrid(grid) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const ROWS = grid.length;
    const COLUMNS = grid[0].length;
    const CELL = 10;

    canvas.height = ROWS * CELL;
    canvas.width = COLUMNS * CELL;

    for (let x = 0; x < ROWS; x++) {
        for (let y = 0; y < COLUMNS; y++) {
            ctx.fillStyle  = grid[x][y] === 0 ? "white" : "black";
            ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
        }
    }
}
