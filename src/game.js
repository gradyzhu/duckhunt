const Score = require("./score.js");
const Round = require("./round.js"); 
const Cross = require("./cross.js");
const Duck = require("./duck.js");

class Game {
  constructor(cc, sc, dc, gc) {
    this.cc = cc;
    this.sc = sc;
    this.dc = dc;
    this.gc = gc;

    this.roundCount = 0;
    this.score = new Score(this.gc);
    this.cross = new Cross(this.cc);
    this.duck = new Duck(this.dc);

    this.round = new Round(
      this.gc, 
      this.score, 
      this.roundCount, 
      this.cross);
    
  }

  start() {
    while (!gameOver()) {
      current = 
      current.playRound();
    }
  }

  newRound() {
    this.round = new Round(this.gc, this.score, this.roundCount, this.cross);
  }

  gameOver() {
    return (this.round.ducksShot < 5 && this.round.ducksLeft === 0);
  }

}

module.exports = Game;