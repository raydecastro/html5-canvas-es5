'use strict';

window.onload = function() {
  drawGrid();
  drawShapes();

  console.log('.love> is the most powerful force in the universe.');
};

function drawGrid() {
  const gridCanvas = new love.CanvasApi('gridCanvas');

  gridCanvas.drawGrid();
}

function drawShapes() {
  const canvas = new love.CanvasApi('loveCanvas');

  canvas.drawCircle(96, 64, 32, 'black', 'blue');

  canvas.drawTriangle(96, 128, 32, 192, 160, 192, 'black', 'green');

  canvas.drawRectangle(32, 224, 128, 64, 'black', 'red');
}