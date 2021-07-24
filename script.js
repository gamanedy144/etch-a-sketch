const container = document.querySelector('#grid-container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
let trigger = false;
let squareDiv = document.createElement('div');
squareDiv.classList.add('square');
let squareRow = document.createElement('div');

function makeRows (rowNum){
    for (let i = 0; i < rowNum; i++){
        let row = document.createElement('div');
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumns (colNum){
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < colNum; j++){
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = "cell";
            addEventToCell(newCell);
        }
    }
}

function defaultGrid(){
    makeRows(16);
    makeColumns(16);
}
defaultGrid();

let cellArray = document.querySelectorAll(".cell");
cellArray.forEach(function(e){
    e.addEventListener("mouseenter", function(e){
        e.preventDefault();
        if(trigger == true){
            this.style.backgroundColor = "black";
        }
    })
})
document.addEventListener('mousedown', function(){
    trigger = true;
})
document.addEventListener('mouseup', function(){
    trigger = false;
})


function addEventToCell(cell){
    cell.addEventListener('mousedown', () =>{
        cell.style.backgroundColor = "black";
    })
}