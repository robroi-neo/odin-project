const GRID_SIZE = 16;
const container = document.querySelector('.grid-container');
const palette = document.querySelector('.palette');
const sizeSlider = document.querySelector('#size-slider');
const sizeValue = document.querySelector('#size-value');
const COLORS = ['#000000', '#e63946', '#f1a208', '#2a9d8f', '#264653', '#e76f51', '#ffffff'];

let isMouseDown = false;
let currentColor = COLORS[0];
document.documentElement.style.setProperty('--current-color', currentColor);
document.addEventListener('mousedown', () => (isMouseDown = true));
document.addEventListener('mouseup', () => (isMouseDown = false));

function createPalette(colors) {
    colors.forEach((color, index) => {
        const swatch = document.createElement('div');
        swatch.classList.add('palette__swatch');
        swatch.style.backgroundColor = color;
        if (index === 0) swatch.classList.add('selected');

        swatch.addEventListener('click', () => {
            currentColor = color;
            document.documentElement.style.setProperty('--current-color', currentColor);
            document
                .querySelectorAll('.palette__swatch')
                .forEach((s) => s.classList.remove('selected'));
            swatch.classList.add('selected');
        });

        palette.appendChild(swatch);
    });
}

function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.addEventListener('mousedown', () => {
                cell.style.backgroundColor = currentColor;
            });
            cell.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    cell.style.backgroundColor = currentColor;
                }
            });
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

sizeSlider.addEventListener('input', () => {
    const size = Number(sizeSlider.value);
    sizeValue.textContent = `${size} x ${size}`;
    createGrid(size);
});

createPalette(COLORS);
createGrid(GRID_SIZE);
