export function dfs_grid(grid) {
    const HEIGHT = grid.length();
    const WIDTH = grid.length();

    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    function dfs(x, y) {
        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx < 0 || nx >= HEIGHT || ny < 0 || ny >= WIDTH) continue;
            if (grid[nx][ny] == -1) continue;
            if (grid[nx][ny] != 0) continue;
            grid[nx][ny] += grid[x][y] + 1;
            dfs(nx, ny);
        }
    }

    grid[1][1] = 1;
    dfs(1, 1);
    return grid;
}


