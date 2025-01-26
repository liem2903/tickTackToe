function createGrid(num) {
    let colour = prompt("Give me a hex-code rq please");

    for (let row = 0; row < num; row++) {
        let box = document.createElement("div");
        box.classList.add("createDiv");
        // Adding divs to the big div

        for (let col = 0; col < num; col++) {
            let div = createSmallDiv(colour);
            box.appendChild(div);
        }
    
        divBox.appendChild(box);
    }
}

function createSmallDiv(colour) {
    const div = document.createElement("div");
    div.classList.add("smallerDiv");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = colour;
    })

    return div;
}

function clearGrid() {
    const divGrid = document.querySelectorAll(".createDiv");

    divGrid.forEach((div) => {
        div.remove();
    });
}

function changeGrid() {
    let num = parseInt(prompt("How many squares per side?"));

    if (num > 100) {
        alert("Not allowed more than 100 per side");
        return;
    }

    clearGrid();
    createGrid(num);
}

function changeColour(newColour) {
    const allSmallDivs = document.querySelectorAll(".smallerDiv");

    allSmallDivs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = newColour;
        })
    });
}

function clearBoard() {
    const allSmallDivs = document.querySelectorAll(".smallerDiv");

    allSmallDivs.forEach((div) => {
        div.style.backgroundColor = "Transparent";
    });
}

const gridButton = document.querySelector("#grid");
const colourButton = document.querySelector("#colour");
const rubberButton = document.querySelector("#rubber");
const clearButton = document.querySelector("#clear");
const divBox = document.querySelector(".container");
let totalHeight = divBox.clientHeight;

createGrid(prompt("How many rows do you want?"));

gridButton.addEventListener("click", () => {
    changeGrid();
})

colourButton.addEventListener("click", () => {
    changeColour(prompt("What colour do you want to change to?"));
})

rubberButton.addEventListener("click", () => {
    changeColour("Transparent");
})

clearButton.addEventListener("click", () => {
    clearBoard();
})



 