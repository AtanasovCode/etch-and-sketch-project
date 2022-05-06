const grid = document.querySelector(".grid-container");
let cell;

const forest = document.querySelector("#forest");
const ocean = document.querySelector("#ocean");
const lava = document.querySelector("#lava");
const color = document.querySelector("#color");
const colorMode = document.querySelector("#colorPicker");

let currentMode = "color"; //Default Mode
let currentColor = "#000000"; //Default Color
let currentGridSize = 8; //Sets the current grid size
let currentBackgroundColor = "#ffffff";

const small = document.querySelector("#small");
const medium = document.querySelector("#medium");
const large = document.querySelector("#large");
const giga = document.querySelector("#giga");

const clear = document.querySelector("#clear");
const erase = document.querySelector("#erase");

//Function For Creating The Grid Pattern
function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
        cell.addEventListener("mousedown", paintGrid);
        cell.addEventListener("mouseover", paintGrid);
    }
}

//Paint on mousedown only
let mousedown = false;
grid.onmousedown = () => {mousedown = true;}
grid.onmouseup = () => {mousedown = false;}



//Function that paints the canvas
function paintGrid(e) {
    if(e.type === "mouseover" && !mousedown) return;
    if(currentMode === "color") {
        e.target.style.cssText = `background-color: ${currentColor};`;
    }
    else if (currentMode === "ocean") {
        if (randomNumber() === 1) {
            e.target.style.cssText = "background-color: hsl(250, 97%, 50%);";
        } else if (randomNumber() === 2) {
            e.target.style.cssText = "background-color: hsl(250, 95%, 70%);";
        } else if (randomNumber() === 3) {
            e.target.style.cssText = "background-color: hsl(250, 95%, 39%);";
        } else if (randomNumber() === 4) {
            e.target.style.cssText = "background-color: hsl(250, 77%, 34%);";
        } else {
            e.target.style.cssText = "background-color: hsl(250, 54%, 57%);";
        }
    }
    else if (currentMode === "forest") {
        if (randomNumber() === 1) {
            e.target.style.cssText = "background-color: hsl(109, 100%, 50%);";
        } else if (randomNumber() === 2) {
            e.target.style.cssText = "background-color: hsl(109, 100%, 70%);";
        } else if (randomNumber() === 3) {
            e.target.style.cssText = "background-color: hsl(108, 100%, 26%);";
        } else if (randomNumber() === 4) {
            e.target.style.cssText = "background-color: hsl(109, 100%, 82%);";
        } else {
            e.target.style.cssText = "background-color: hsl(109, 66%, 18%);";
        }
    }
    else if (currentMode === "lava") {
        if (randomNumber() === 1) {
            e.target.style.cssText = "background-color: hsl(0, 98%, 50%);";
        } else if (randomNumber() === 2) {
            e.target.style.cssText = "background-color: hsl(0, 100%, 29%);";
        } else if (randomNumber() === 3) {
            e.target.style.cssText = "background-color: hsl(0, 57%, 38%);";
        } else if (randomNumber() === 4) {
            e.target.style.cssText = "background-color: hsl(0, 94%, 17%);";
        } else {
            e.target.style.cssText = "background-color: hsl(0, 90%, 65%);";
        }
    }
    else if(currentMode === "erase") {
        e.target.style.cssText = `background-color: ${currentBackgroundColor}`;
    }
}

//Default Grid Value
makeGrid(currentGridSize);




//Function to remove the grid before changing color/size of grid
function removeGrid() {
    grid.textContent = "";
}


//Function to clear the grid before changing color/size of grid or when pressing "clear" button
function clearGrid() {
    removeGrid();
    makeGrid(currentGridSize);
}

//Calling clearGrid function when user clicks the "clear" button
clear.addEventListener("click", clearGrid);


//Active erasor tool when pressing "eraser" button
erase.addEventListener("click", eraser);

//Function for erasing
function eraser() {
    currentMode = "erase";
}


//Function If The User Choses The Small Grid Pattern
small.addEventListener("click", () => {
    currentGridSize = 8;
    removeGrid();
    makeGrid(currentGridSize);
});

//Function If THe User Choses The Medium Grid Pattern
medium.addEventListener("click", () => {
    currentGridSize = 16;
    removeGrid();
    makeGrid(currentGridSize);
});

//Function If THe User Choses The Large Grid Pattern
large.addEventListener("click", () => {
    currentGridSize = 32;
    removeGrid();
    makeGrid(currentGridSize);
});

//Function If THe User Choses The Giga Grid Pattern
giga.addEventListener("click", () => {
    currentGridSize = 64;
    removeGrid();
    makeGrid(currentGridSize);
});


//Activate "ocean" painting mode when user click "Ocean Mode" button
ocean.addEventListener("click", () => {
    currentMode = "ocean";
});

//Activate "forest" painting mode when user click "Forst Mode" button
forest.addEventListener("click", () => {
    currentMode = "forest";
});

//Activate "Lava" painting mode when user click "Lava Mode" button
lava.addEventListener("click", () => {
    currentMode = "lava";
});

//Activate "Color" painting mode when user click "Color Mode" button
color.onchange = () => {
    currentColor = color.value;
}

//Activate changeBg function when user selects a different color 
gridColor.onchange = changeBg;

//Change grid background color
function changeBg() {
    currentBackgroundColor = gridColor.value;
    grid.style.cssText = `background-color: ${currentBackgroundColor};`;
    removeGrid();
    makeGrid(currentGridSize);
}

//Sets the color mode when the user selects the "Color Mode" button
colorMode.addEventListener("click", () => {
    currentMode = "color";
})


//Random Number Generator used for colors pattern
function randomNumber() {   
    return Math.floor(Math.random() * 5) + 1;
}

