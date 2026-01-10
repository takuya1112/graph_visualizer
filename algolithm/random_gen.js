export function randomGrid(height, width) {
    const maze_height = (height / 2) * 2 + 1;
    const maze_width = (width / 2) * 2 + 1;

    const grid = Array.from({ length : maze_height }, () => 
        Array.from({ length : maze_width }, () => -1 )
    );

    const dirs = [[2, 0], [0, 2], [-2, 0], [0, -2]];

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }


    function dfs(x, y) {
        grid[x][y] = 0;
        shuffle(dirs);

        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx <= 0 || nx >= maze_height - 1 || ny <= 0 || ny >= maze_width - 1) continue;
            if (grid[nx][ny] == 0) continue;
            grid[x + dx / 2][y + dy / 2] = 0;
            dfs(nx, ny);
        }
    }
    dfs(1, 1);
    return grid;
}
