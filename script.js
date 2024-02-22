function changeBoxColor(targetDiv) {
    targetDiv.style.backgroundColor = 'white';
}

function generateGrid() {
    const gridContainer = document.querySelector('.gridContainer');
  
    for(let numOfBoxes = 1; numOfBoxes <= 256; numOfBoxes++) {
        const box = document.createElement('div');
        box.style.flexBasis = '36px';
        box.style.flexShrink = '1';
        box.addEventListener('mouseover', (event) => {
           changeBoxColor(event.target);
        });
        gridContainer.appendChild(box);
    }
}
generateGrid();