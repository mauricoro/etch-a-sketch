function addColor(e) {
    this.classList.add('color');
}



const container = document.querySelector(".container");


for (let i = 0; i < 16; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    for(let j = 0; j < 16; j++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', addColor);
        div.classList.add('square');
        row.append(div);
    }
    container.appendChild(row);
}

const squares = document.querySelectorAll('.square');
squares

