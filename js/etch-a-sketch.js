function addColor(e) {
    this.classList.add('color');
    console.log(e);
}

function addGrid(scale){
    let container = document.querySelector(".container");
    let button = document.createElement('button');
    button.onclick = updateGrid;
    button.textContent = "New Grid"
    container.appendChild(button);

    for (let i = 0; i < scale; i++){
        let row = document.createElement('div');    
        row.classList.add('row');   
        for(let j = 0; j < scale; j++){
            let square = document.createElement('div');
            square.addEventListener('mouseover', addColor);
            square.classList.add('square');
            square.style.minHeight = (90 / scale - (0.2 - 1 / scale)) + "vh"; //NEED TO SUBTRACT BORDERS HEIGHT
            row.append(square);
        }
        container.appendChild(row);
    }
}

function removeGrid(){
    let container = document.querySelector(".container")
    body.removeChild(container);    
}


function updateGrid(){
    let number = Number(prompt("Squares?"));
    console.log(number);
    if(number && number > 0 && number <= 100){
        removeGrid();
        let container = document.createElement('div');
        container.classList.add('container');
        body.appendChild(container);
        addGrid(number);
    }
    
}

let body = document.querySelector('body');
let scale = 16;
addGrid(scale);
 



