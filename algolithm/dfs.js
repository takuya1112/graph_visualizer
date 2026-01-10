let HEIGHT;
let WIDTH;

let stack = [];
let GRID;

const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

export function initDfs(grid) {
    GRID = grid;
    HEIGHT = grid.length;
    WIDTH = grid[0].length;

    GRID[1][1] = 1;
    stack = [[1, 1]];
}



export function dfsStep() {
    if (stack.length == 0) return [];

    const [x, y] = stack.pop();
    let result = [];

    for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || nx >= HEIGHT || ny < 0 || ny >= WIDTH) continue;
        if (GRID[nx][ny] == -1) continue;
        if (GRID[nx][ny] != 0) continue;
        GRID[nx][ny] = GRID[x][y] + 1;
        stack.push([nx, ny]);
        result.push([nx, ny]);
    }
    return result;
}


