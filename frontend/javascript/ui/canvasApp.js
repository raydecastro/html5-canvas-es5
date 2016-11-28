'use strict';


const gridCanvas = new love.CanvasApi('loveCanvas');

const loveCanvas = new love.CanvasApi('loveCanvas');

// const originX = 200;
// const originY = 200;
// const radius = 100;
//
// canvas.drawCircle(originX, originY - radius * 0, radius, 'green');
// canvas.drawCircle(originX, originY + radius * 1, radius, 'red');

gridCanvas.drawGrid();

loveCanvas.drawRectangle(100, 300, 400, 200, '#D2CECA');

loveCanvas.drawTriangle(300, 100, 50, 300, 550, 300, '#2277BA');

loveCanvas.drawRectangle(275, 400, 50, 100, 'brown');

loveCanvas.drawRectangle(200, 350, 50, 50, 'white');

loveCanvas.drawRectangle(350, 350, 50, 50, 'white');