//Get grid container
const grid = document.getElementById("container");
const btn = document.getElementById("btn-grid");

//Grid creation function
function makeGrid(size) {
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-cols', size);
    for (c = 0; c < (size ** 2); c++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "grid-item";
    };
    etchGrid();
};

//Grid etching function called inside makeGrid()
function etchGrid() {
    let items = document.querySelectorAll('.grid-item');
     items.forEach((item) => {
         item.addEventListener('mouseover', () => {
             item.style.background = "#000";
         })
     })
};

//clear grid for new grid creation
function clearGrid() {
    grid.innerHTML = "";
};

//new grid creation
function newGrid() {
    clearGrid();
    let newSize = prompt("Enter an integer value between 1 and 100", "30");
    newSize = Math.round(+newSize);
    makeGrid(newSize);
};

makeGrid(16);
btn.addEventListener('click', newGrid);