const Score = require("./score.js");
const Round = require("./round.js"); 

class Game {
  constructor() {
    this.score = new Score();
    this.round = null;
    this.roundNumber = 0;
  }

  newRound() {
    this.round = new Round(this.score);
  }

  gameOver() {
  }

}

module.exports = Game;