const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  for (let c = 0; c < rows * cols; c++) {
    container.appendChild(document.createElement("div")).classList.add('grid-item');
  }
}


function startPainting() {
  let selectedColor;

  const colorPicker = document.querySelector('#colorPicker');
  colorPicker.addEventListener('change', () => {
    selectedColor = colorPicker.value;
    console.log(selectedColor); 
  });

  document.querySelectorAll('.grid-item').forEach((cell) => {
    cell.addEventListener('mouseenter', () => cell.style.backgroundColor = selectedColor);
  });
}

/*let user choose options */
document.querySelector('#paintBtn').addEventListener('click', () => { 
  startPainting(); addGlowEffect(); });

document.querySelector('#reSketch').addEventListener('click', () => { 
  container.innerHTML = ''; makeRows(16,16); addGlowEffect(); });

document.querySelector('#randColorBtn').addEventListener('click', () => { 
  paintRandColor(); addGlowEffect(); });

document.querySelector('#eraserBtn').addEventListener('click', () => { 
  eraserFunc(); addGlowEffect(); });

makeRows(16, 16);

/* create functions attached to the buttons */

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function paintRandColor() {
  document.querySelectorAll('.grid-item').forEach((cell) => {
    cell.addEventListener('mouseenter', () => cell.style.backgroundColor = getRandomColor());
  });
}


/*glow effect */
function addGlowEffect() {
  document.querySelectorAll('.grid-item').forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
      cell.classList.add('glow');
      setTimeout(() => cell.classList.remove('glow'), 1000);
    });
  });
}

function getRgbColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, 
  ${Math.floor(Math.random() * 256)}, 
  ${Math.floor(Math.random() * 256)})`;
}


function eraserFunc() {
  document.querySelectorAll('.grid-item').forEach((cell) => {
    cell.addEventListener('mouseenter', () => cell.style.backgroundColor = "transparent");
  });
}

/* set up background environment */

function changeColorsOn2x2Grid() {
  const cells = document.querySelectorAll('.background-grid .background-item');
  cells.forEach((cell) => {
      cell.style.backgroundColor = getRgbColor();
  });
}

function startChangingColors() {
  changeColorsOn2x2Grid(); 
  addGlowEffect();
  setInterval(changeColorsOn2x2Grid, 1000); 
}

startChangingColors();


function getRandomBlackOrGreyColor() {
  return Math.random() >= 0.5 ? 'white' : 'lightgrey';
}

function changeColorsOnLeftSide() {
  document.querySelectorAll('.background-grid .background-item-left')
  .forEach((cell) => cell.style.backgroundColor = getRandomBlackOrGreyColor());
}


function startChangingColorsLeft() {
  setInterval(changeColorsOnLeftSide, 6000);
}

function setGridSize() {
  const rowSlider = document.getElementById('rowSlider');
  const columnSlider = document.getElementById('columnSlider');

  const numRows = parseInt(rowSlider.value);
  const numColumns = parseInt(columnSlider.value);

  if (numRows > 100 || numColumns > 100) {
    alert('Number too high!');
    return;
  }

  container.innerHTML = '';
  makeRows(numRows, numColumns);
}

/*interactive way of chaning rows/columns */

const rowSlider = document.getElementById('rowSlider');
const columnSlider = document.getElementById('columnSlider');

rowSlider.addEventListener('input', setGridSize);
columnSlider.addEventListener('input', setGridSize);

changeColorsOnLeftSide();
startChangingColorsLeft();
