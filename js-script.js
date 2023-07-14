function generateSquares() {
    let container = document.querySelector('#container');
  
    for (let i = 0; i < 96; i++) {
      const content = document.createElement('div');
      content.classList.add('square');
      container.appendChild(content);
    }
  }
  
  generateSquares();