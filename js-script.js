let isPaused = false;
let isEraserEnabled = false;

function generateSquares() {

    if (isPaused){
        return;
    }

    let container = document.querySelector('#container');
  
    for (let i = 0; i < 256; i++) {
      const content = document.createElement('div');
      content.classList.add('square');
  
      // Add event listeners for hover effect
      content.addEventListener('mouseenter', function() {
        content.classList.add('hovered');
      });
  
      container.appendChild(content);
    }

  }

  function eraserFunc() {
    isPaused = true;
    isEraserEnabled = true;

    let hoveredSquares = document.querySelectorAll('.hovered');
    hoveredSquares.forEach((square) => {
      square.addEventListener('mouseenter', function() {
        square.classList.remove('hovered');
      });
    });
  }

  function newSketchFunc(){
        let hoveredSquares = document.querySelectorAll('.hovered');
        hoveredSquares.forEach((square) => {   
            square.classList.remove('hovered');
    });
  }

  /*buttons */
  const start = document.querySelector('#start');
    start.addEventListener('click', () =>{
        generateSquares();
    });

  const eraser = document.querySelector('#eraser');
    eraser.addEventListener('click', () =>{
        eraserFunc();
    });

    const newSketch = document.querySelector('#newSketch');
        newSketch.addEventListener('click', ()  =>{
            newSketchFunc();
    });

