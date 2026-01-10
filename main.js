import { drawGrid, initCanvas, drawStep } from "./ui/canvas.js";
import { randomGrid } from "./algolithm/random_gen.js";
import { initDfs, dfsStep } from "./algolithm/dfs.js";

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
    setInterval(() => {
        let res = dfsStep();
        if (res.length == 0) clearInterval();
        for (let i = 0; i < res.length; i++) {
            drawStep(res[i]);
        }
    }, 50);
}

makeMaze();
document.getElementById("remake_maze").onclick = makeMaze;
document.getElementById("start_dfs").onclick = solveDfs;