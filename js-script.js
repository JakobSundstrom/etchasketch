const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.classList.add('grid-item');
    container.appendChild(cell);
  }
}

function startPainting() {
  const cells = document.querySelectorAll('.grid-item');
  let selectedColor; // Declare selectedColor outside of the event listeners

  const colorPicker = document.querySelector('#colorPicker');
  colorPicker.addEventListener('change', () => {
    selectedColor = colorPicker.value;
    console.log(selectedColor); // Output the selected color value
  });

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', function () {
      cell.style.backgroundColor = selectedColor;
    });
  });
}

const paintBtn = document.querySelector('#paintBtn');
paintBtn.addEventListener('click', () => {
  startPainting();
  addGlowEffect();
});

const reSketch = document.querySelector('#reSketch');
  reSketch.addEventListener('click', () => {
    container.innerHTML = '';
    makeRows(16,16);
  });

makeRows(16, 16);



/*random color */

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function paintRandColor(){

  const cells = document.querySelectorAll('.grid-item');

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', function () {
      cell.style.backgroundColor = getRandomColor();
    });
  });
}

const randColorBtn = document.querySelector('#randColorBtn');
    randColorBtn.addEventListener('click', () => {
      paintRandColor();
      addGlowEffect();
    });


/*rgb color */
function getRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

/*glow effect */
function addGlowEffect() {

  const cells = document.querySelectorAll('.grid-item');

    cells.forEach((cell) => {
      cell.addEventListener('mouseenter', function () {
        cell.classList.add('glow');
        setTimeout(() => {
          cell.classList.remove('glow');
        }, 1000);
      });
    });
}

function eraserFunc(){

  const cells = document.querySelectorAll('.grid-item');

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', function () {
      cell.style.backgroundColor = "transparent";
    });
  });
}

const eraserBtn = document.querySelector('#eraserBtn');
eraserBtn.addEventListener('click', () => {
  eraserFunc();
  addGlowEffect();
});


/*change color randomly on background grid */
function changeColorsOn2x2Grid() {
  const cells = document.querySelectorAll('.background-grid .background-item');
  cells.forEach((cell) => {
      cell.style.backgroundColor = getRgbColor();
  });
}

function startChangingColors() {
  changeColorsOn2x2Grid(); // Change colors immediately
  addGlowEffect();
  setInterval(changeColorsOn2x2Grid, 1000); // Change colors every 3 seconds
}

startChangingColors();

/*change color slowly on left side */

function getRandomBlackOrWhiteColor() {
  // Generate a random number between 0 and 1
  const randomNumber = Math.random();

  // If the random number is greater than or equal to 0.5, return white, otherwise return black
  return randomNumber >= 0.5 ? 'white' : 'black';
}

function changeColorsOnLeftSide() {
  const cells = document.querySelectorAll('.background-grid .background-item-left');
  cells.forEach((cell) => {
      cell.style.backgroundColor = getRandomBlackOrWhiteColor();

  });
}

function startChangingColorsLeft() {
  changeColorsOnLeftSide(); 
  setInterval(changeColorsOnLeftSide, 6000);
}
startChangingColorsLeft();

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

const rowSlider = document.getElementById('rowSlider');
const columnSlider = document.getElementById('columnSlider');

rowSlider.addEventListener('input', setGridSize);
columnSlider.addEventListener('input', setGridSize);