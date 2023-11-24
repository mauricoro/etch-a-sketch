function addColor(e) {
  // original
  // this.classList.add('color');

  // bonus 1
  this.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}`

  // bonus 2
  /*
    let squareColor = this.style.backgroundColor
    let endIndex = 7;
    while(!Number(squareColor.substring(4,endIndex))){
        endIndex -= 1;
    }

    let rgb = Number(squareColor.substring(4,endIndex));

    if(rgb > 5){
        rgb = rgb - 25;
        this.style.backgroundColor = `rgb(${rgb},${rgb},${rgb})`
        console.log(this.style.backgroundColor);

    } */
}

function addGrid(scale) {
  const container = document.querySelector(".container")
  const button = document.createElement("button")
  button.onclick = updateGrid
  button.textContent = "New Grid"
  container.appendChild(button)

  for (let i = 0; i < scale; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    for (let j = 0; j < scale; j++) {
      const square = document.createElement("div")
      square.classList.add("square")
      square.addEventListener("mouseover", addColor)
      // square.style.backgroundColor = "rgb(255,255,255)";  //For bonus 2
      square.style.minHeight = `${90 / scale - (0.2 - 1 / scale)}vh` // NEED TO SUBTRACT BORDERS HEIGHT
      row.append(square)
    }
    container.appendChild(row)
  }
}

function removeGrid() {
  const container = document.querySelector(".container")
  body.removeChild(container)
}

function updateGrid() {
  const number = Number(prompt("Squares?"))
  console.log(number)
  if (number && number > 0 && number <= 100) {
    removeGrid()
    const container = document.createElement("div")
    container.classList.add("container")
    body.appendChild(container)
    addGrid(number)
  }
}

const body = document.querySelector("body")
const scale = 16
addGrid(scale)
