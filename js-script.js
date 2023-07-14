function generateSquares() {
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
  
  generateSquares();

  