const Score = require("./score.js");
const Round = require("./round.js"); 
const Mouse = require("./mouse.js");
const Duck = require("./duck.js");

class Game {
  constructor(sc, dc, gc) {
    this.sc = sc;
    this.dc = dc;
    this.gc = gc;
    
    this.roundCount = 0;
    this.score = new Score(this.gc);
    this.mouse = new Mouse(this.dc);
    this.duck = new Duck(this.dc);

    this.round = new Round(
      this.gc, 
      this.score, 
      this.roundCount, 
      this.mouse);
    
  }

  start() {
    while (!gameOver()) {
      current = 
      current.playRound();
    }
  }

  newRound() {
    this.round = new Round(this.gc, this.score, this.roundCount, this.mouse);
  }

  gameOver() {
    return (this.round.ducksShot < 5 && this.round.ducksLeft === 0);
  }

}

module.exports = Game;