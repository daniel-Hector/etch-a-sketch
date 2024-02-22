function changeBoxColor(targetDiv) {
    targetDiv.style.backgroundColor = 'white';
}

function generateGrid(gridSize) {
    const gridContainer = document.querySelector('.gridContainer');

    let size = 256;
    if(gridSize < 101) {
        size = gridSize * gridSize;
    }

    for(let numOfBoxes = 1; numOfBoxes <= size; numOfBoxes++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.flexBasis = '36px';
        box.style.flexShrink = '1';
        box.addEventListener('mouseover', (event) => {
           changeBoxColor(event.target);
        });
        gridContainer.appendChild(box);
    }
}
generateGrid();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let userInput = prompt('Choose a number between 17-100');
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.remove();
    });
    generateGrid(userInput);
});