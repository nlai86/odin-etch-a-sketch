const container = document.querySelector(".container");
let hovered = 0;

for (let i = 0; i < 16; i++) {
    let grid = document.createElement('div');
    grid.className = "grid";
    container.appendChild(grid);
}  

document.querySelector(".grid").addEventListener('mouseenter', function (e) {
    if (document.getElementsByClassName(".grid").getPropertyValue("background-color") == "white") {
        document.querySelector(".grid").setAttribute('style' , 'background-color: blue;') ; 
    }
});
