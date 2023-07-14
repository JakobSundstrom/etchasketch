const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.classList.add('grid-item')
    container.appendChild(cell)

    cell.addEventListener('mouseenter', function(){
        cell.classList.add('hovered');
    });
    
  };

};

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
