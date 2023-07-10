function addColor(e) {
    this.classList.add('color');
    console.log(e);
}

let scale = 14;


const container = document.querySelector(".container");


for (let i = 0; i < scale; i++){
    let row = document.createElement('div');
    row.classList.add('row');   
    for(let j = 0; j < scale; j++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', addColor);
        div.classList.add('square');
        div.style.minHeight = (90 / scale - (0.2 - 1 / scale)) + "vh"; //NEED TO SUBTRACT BORDERS HEIGHT
        row.append(div);
    }
    container.appendChild(row);
}

const squares = document.querySelectorAll('.square');
squares

