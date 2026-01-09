import { drawGrid } from "./ui/canvas.js";
import { random_grid } from "./algolithm/random_gen.js";
import { dfs_grid } from "./algolithm/dfs.js";

let grid = null;

function make_maze() {
    grid = random_grid();
    drawGrid(grid);
}

function solve_dfs() {
    
}

make_maze();
document.getElementById("remake_maze").onclick = make_maze;
document.getElementById("start_dfs").onclick = solve_dfs;