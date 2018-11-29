function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateGrid() {
    let grid = [];
    for (let i = 0; i < 3; i++) {
        let col = [];
        for (let j = 0; j < 5; j++) {
            if (Math.random() > .5) {
                col.push(1)
            } else {
                col.push(0)
            }
        }
        grid.push(col)
    }
    grid.push(grid[1]);
    grid.push(grid[0]);
    return grid
}

function makeImage() {
    const color = getRandomColor();
    const grid = generateGrid();
    let boxGrid = document.getElementById("image-box");
    while (boxGrid.firstChild) {
        boxGrid.removeChild(boxGrid.firstChild);
    }
    for (let i = 0; i<5; i++) {
        for (let j = 0; j<5; j++) {
            let baseDiv = document.createElement("div");
            baseDiv.style.width= "5rem";
            baseDiv.style.height= "5rem";
            if (grid[i][j]) {
                baseDiv.style.backgroundColor = color
            } else {
                baseDiv.style.backgroundColor = "none"
            }
            boxGrid.appendChild(baseDiv)
        }
    }
}