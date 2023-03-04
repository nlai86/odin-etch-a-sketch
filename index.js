function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            let grid = document.createElement("div");
            grid.className = "grid";
            document.querySelector(".container").appendChild(grid);
        };
    };
    let grids = document.getElementsByClassName("grid");
    for (let i = 0; i < grids.length; i++){
        grids[i].style.width = String(800/x) + "px";
        grids[i].style.height = String(800/x) + "px";
    }

}; 

function draw(e) {
    event.target.style.backgroundColor = "black";
}

createGrid(16);

let gridsList = document.getElementsByClassName("grid");
for (let i = 0; i < gridsList.length; i++){
    gridsList[i].addEventListener("mouseover", draw);
}