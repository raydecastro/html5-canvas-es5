'use strict';

var love = love || {};

(function(namespace) {
  namespace.CanvasApi = CanvasApi;

  function CanvasApi(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.colors = {
      lightSaberBlue: "#2719C7",
      lightSaberGreen: "#17AF0A",
      lightSaberRed: "#CE0C2C"
    };
  }

  CanvasApi.prototype.drawCircle = function (x, y, r, lineColor, fillColor) {
    this.context.strokeStyle = lineColor;
    this.context.fillStyle = fillColor;
    this.context.beginPath();
    this.context.arc(x, y, r, 0, 2 * Math.PI);
    this.context.fill();
    this.context.stroke();
  };

  CanvasApi.prototype.drawRectangle = function (x, y, width, height, lineColor, fillColor) {
    this.context.strokeStyle = lineColor;
    this.context.fillStyle = fillColor;
    this.context.fillRect(x, y, width, height);
    this.context.strokeRect(x, y, width, height);
  };

  CanvasApi.prototype.drawTriangle = function (x1, y1, x2, y2, x3, y3, lineColor, fillColor) {
    this.context.strokeStyle = lineColor;
    this.context.fillStyle = fillColor;
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.lineTo(x3, y3);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();

  };

  CanvasApi.prototype.drawGrid = function () {
    var gridWidth = 1024;
    var gridHeight = 768;

    this.context.setLineDash([2, 4]);

    var x, p = 0;
    for (x = 0; x <= gridWidth; x += 32) {
      this.context.moveTo(0.5 + x + p, p);
      this.context.lineTo(0.5 + x + p, gridHeight + p);
    }

    for (x = 0; x <= gridHeight; x += 32) {
      this.context.moveTo(p, 0.5 + x + p);
      this.context.lineTo(gridWidth + p, 0.5 + x + p);
    }

    this.context.moveTo(gridWidth, 0)
    this.context.lineTo(gridWidth, gridHeight);
    this.context.moveTo(0, gridHeight);
    this.context.lineTo(gridWidth, gridHeight);
    this.context.strokeStyle = this.colors.lightSaberBlue;
    this.context.stroke();
  };

})(love);
