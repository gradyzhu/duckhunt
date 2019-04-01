// import _ from 'lodash';
import './style.css';
const Game = require("./game.js");


document.addEventListener("DOMContentLoaded", (event) => {
  var sCanvas = document.getElementById('canvas-static');
  var dCanvas = document.getElementById('canvas-dynamic');
  var gCanvas = document.getElementById('canvas-game');
  
  var sc = sCanvas.getContext('2d');
  var dc = dCanvas.getContext('2d');
  var gc = gCanvas.getContext('2d');

  let game = new Game(sc, dc, gc);
  game.newRound();
  // console.log(round.mousePosition);
  c.strokeStyle= "#000000";
});

console.log("webpack is working!");
