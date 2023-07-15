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

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', function () {
      cell.classList.add('hovered');
    });
  });
}

const paintBtn = document.querySelector('#paintBtn');
paintBtn.addEventListener('click', startPainting);

makeRows(16, 16);




const sizebtn = document.querySelector('#sizeBtn');
    sizebtn.addEventListener('click', () => {
        container.innerHTML = '';

        var x = prompt("Enter rows: ", "16")
        var y = prompt("Enter columns: ", "16")

        var num1 = parseInt(x)
        var num2 = parseInt(y)

        if ((num1 || num2) > 100){
            alert("Number too high!")
        }

        makeRows(num1,num2);

    });

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
    });


/*rgb color */
function getRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function paintRbg(){

  const cells = document.querySelectorAll('.grid-item');

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', function () {
      cell.style.backgroundColor = getRgbColor();
    });
  });
}

const rbgBtn = document.querySelector('#rgbBtn');
  rbgBtn.addEventListener('click', () => {
    paintRbg();
  });



