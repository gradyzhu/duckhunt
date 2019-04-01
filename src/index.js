// import _ from 'lodash';
import './style.css';
const Game = require("./game.js");


document.addEventListener("DOMContentLoaded", (event) => {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');

  let game = new Game(c);
  let round = game.round;
  // console.log(round.mousePosition);
  c.strokeStyle= "#000000";
});

console.log("webpack is working!");