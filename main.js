import { drawGrid, initCanvas, drawStep } from "./ui/canvas.js";
import { randomGrid } from "./algolithm/random_gen.js";
import { initDfs, dfsStep, dfsFinish } from "./algolithm/dfs.js";
import { initBfs, bfsStep, bfsFinish } from "./algolithm/bfs.js";

let grid;
const HEIGHT = 50;
const WIDTH = 50;
const CELL = 10;

function makeMaze() {
    grid = randomGrid(HEIGHT, WIDTH);
    initCanvas(HEIGHT, WIDTH, CELL);
    drawGrid(grid);
}

function solveDfs() {
    initDfs(grid);
    drawStep([1, 1]);
    const interval = setInterval(() => {
        let res = dfsStep();
        if (dfsFinish()) clearInterval(interval);
        for (let i = 0; i < res.length; i++) {
            drawStep(res[i]);
        }
    }, 30);
}

function solveBfs() {
    initBfs(grid);
    drawStep([1, 1]);
    const interval = setInterval(() => {
        let res = bfsStep();
        if (bfsFinish()) clearInterval(interval);
        for (let i = 0; i < res.length; i++) {
            drawStep(res[i]);
        }
    }, 20);
}

makeMaze();
document.getElementById("remake_maze").onclick = makeMaze;
document.getElementById("start_dfs").onclick = solveDfs;
document.getElementById("start_bfs").onclick = solveBfs;