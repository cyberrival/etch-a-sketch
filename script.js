const container = document.querySelector('.container');
const grid = document.createElement('div');
const clearGridBtn = document.querySelector('.reset-button');
let gridCount = 4;

grid.className = 'grid';
clearGridBtn.addEventListener('click', resetGrid);
container.appendChild(grid);

createGridItems();

function createGridItems() {


    grid.style.gridTemplate = `repeat(${gridCount},1fr) / repeat(${gridCount},1fr)`;
    for (let i = 0; i < (gridCount * gridCount); i++) {
        let div = document.createElement('div');
        div.setAttribute('style', 'height:100%');
        div.addEventListener('mouseover', (event) => {
            event.target.style.background = 'black';
        });

        grid.appendChild(div);
    }
}


function resetGrid() {
    gridCount = Number(prompt('What size would you like the grid?'));
    let gridItems = Array.from(grid.children);
    gridItems.forEach((item) => {
        grid.removeChild(item);
        // item.style.background = 'white';
    })

    createGridItems();
}