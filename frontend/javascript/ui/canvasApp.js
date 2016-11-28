'use strict';


const gridCanvas = new love.CanvasApi('gridCanvas');
const loveCanvas = new love.CanvasApi('loveCanvas');

gridCanvas.drawGrid();

loveCanvas.drawCircle(96, 64, 32, 'black', 'blue');

loveCanvas.drawTriangle(96, 128, 32, 192, 160, 192, 'black', 'green');

loveCanvas.drawRectangle(32, 224, 128, 64, 'black', 'red');