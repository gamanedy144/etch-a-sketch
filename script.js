const container = document.querySelector('#grid-container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

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
            newCell.addEventListener('click', () =>{
                newCell.style.textCSS = "background-color: black;"
                console.log(j + " " + i);
            });
            rows[j].appendChild(newCell).className = "cell";
            
        }
    }
}

function defaultGrid(){
    makeRows(16);
    makeColumns(16);
}
defaultGrid();

function addEventToCell(cell){
    cell.addEventListener('mousedown', () =>{
        cell.style.textCSS = "background-color: black;"
    })
}