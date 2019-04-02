// import _ from 'lodash';
import './style.css';
const Game = require("./game.js");


document.addEventListener("DOMContentLoaded", (event) => {
  var cCanvas = document.getElementById('canvas-cursor');
  var sCanvas = document.getElementById('canvas-static');
  var dCanvas = document.getElementById('canvas-dynamic');
  var gCanvas = document.getElementById('canvas-game');

  var cc = cCanvas.getContext('2d');
  var sc = sCanvas.getContext('2d');
  var dc = dCanvas.getContext('2d');
  var gc = gCanvas.getContext('2d');

  // dc.canvas.addEventListener('mousemove', event => {

  // });

  let game = new Game(cc, sc, dc, gc);

  // var image = new Image();
  // image.src = "http://www.mariomayhem.com/downloads/sprites/duck_hunt/duckhunt_various_sheet.png";
  // dc.drawImage(image, 0, 0);
  // console.log(image);
  // game.newRound();
  // console.log(round.mousePosition);
});

console.log("webpack is working!");
