const Score = require("./score.js");
const Round = require("./round.js"); 
const Mouse = require("./mouse.js");

class Game {
  constructor(c) {
    this.c = c;
    this.roundCount = 0;
    this.score = new Score(this.c);
    this.mouse = new Mouse(this.c);

    this.round = null;
  }

  newRound() {
    this.round = new Round(this.c, this.score, this.roundCount, this.mouse);
  }
  gameOver() {
    
  }

}

module.exports = Game;