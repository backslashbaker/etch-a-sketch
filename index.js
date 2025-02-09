// Get the grid container element
const gridContainer = document.querySelector('.grid-container');

// Define the number of rows and columns
const rows = 16;
const cols = 16;

// Create the grid cells using a loop
for (let i = 0; i < rows * cols; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridContainer.appendChild(gridCell);
}