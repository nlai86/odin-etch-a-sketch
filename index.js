function createGrid(numGrids) {
    for (var rows = 0; rows < numGrids; rows++) {
        for (var columns = 0; columns < numGrids; columns++) {
            let grid = document.createElement("div");
            grid.className = "grid";
            document.querySelector(".container").appendChild(grid);
        };
    };
    let grids = document.getElementsByClassName("grid");
    for (let i = 0; i < grids.length; i++){
        grids[i].style.width = String(800/numGrids) + "px";
        grids[i].style.height = String(800/numGrids) + "px";
    }

};

function removeGrid() {
    let container = document.querySelector(".container");
    container.innerHTML = '';
}

function draw(e) {
    e.target.style.backgroundColor = "black";
}

function newGrid(e) {
    let numGrid = window.prompt("How many squares per side would you like? (100 Maximum)");
    removeGrid();

    while (numGrid > 100) {
        numGrid = window.prompt("Invalid Selection. The maximum number of grids per side is 100. How many squares per side would you like?");
    } 

    createGrid(numGrid);

    let gridsList = document.getElementsByClassName("grid");
    for (let i = 0; i < gridsList.length; i++){
        gridsList[i].addEventListener("mouseover", draw);
    }
}
 
document.querySelector(".new-grid").addEventListener("click", newGrid);