const container = document.querySelector('#grid-container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
let trigger = false;

let squareRow = document.createElement('div');
const resetButton = document.querySelector('#reset-button');
const newSizeButton = document.querySelector('#new-size-button');

function makeRows (number){
    for(let i = 0; i < number * number; i++){
        let cell = document.createElement('div');
        //addEventToCell(cell);
        cell.addEventListener("mouseenter", function(e){
            e.preventDefault();
            if(trigger == true){
                // this.style.backgroundColor = "black";
                this.classList.add('dark-cell');
            };
        });
        container.appendChild(cell).className = 'cell';

    }
}
window.addEventListener('load', setDefaultGrid());

function setGridSize(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
}
function setDefaultGrid(){
    setGridSize(16);
    makeRows(16);
}


document.addEventListener('mouseover',function(){
    trigger=true;
})
function addEventToCell(cell){
    cell.addEventListener('mousedown', () =>{
        // cell.style.backgroundColor = "black";
        cell.classList.add('dark-cell');
    })
}
// reset Grid function
function resetGrid(){
    let cellArray = document.querySelectorAll(".cell");
    cellArray.forEach(function(e){
        e.classList.remove('dark-cell');
    });
    // console.log('Reset button clicked');
}
resetButton.addEventListener('click', resetGrid);

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
      container.removeChild(element);
    });
  }
function changeSize(){
    let newSize = prompt('Enter new size');
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
          alert("Enter a number from 1-64 range");
          changeSize();
        } 
        else {
            clearGrid();
            resetGrid();
            setGridSize(newSize);
            makeRows(newSize);
        }
    }
}

newSizeButton.addEventListener('click', changeSize);