let HEIGHT;
let WIDTH;

let queue = [];
let GRID;

const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

export function initBfs(grid) {
    GRID = grid;
    HEIGHT = grid.length;
    WIDTH = grid[0].length;

    GRID[1][1] = 1;
    queue = [[1, 1]];
}

export function bfsStep() {
    if (queue.length == 0) return [];

    const [x, y] = queue.shift();
    let result = [];

    for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || nx >= HEIGHT || ny < 0 || ny >= WIDTH) continue;
        if (GRID[nx][ny] == -1) continue;
        if (GRID[nx][ny] != 0) continue;
        GRID[nx][ny] = GRID[x][y] + 1;
        queue.push([nx, ny]);
        result.push([nx, ny]);
    }
    return result;
}

export function bfsFinish() {
    return queue.length == 0;
}
