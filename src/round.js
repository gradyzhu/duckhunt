import Shot from "./shot";
import Duck from "./duck";
import Mouse from "./mouse";

class Round {

  constructor(gameScore, gameRound) {
    this.shotCount = 3;
    this.duckCount = 3;
    this.gameScore = gameScore;
    this.gameRound = gameRound;
    this.duckPosition = [0, 0];
    this.roundOver = false;
  }

  resetRound() {
    if (this.roundOver()) {
      this.shotCount = 3;
      this.roundOver = false;
    }
  }

  hit() {
    // if mouse on-click matches duck position
    this.shotCount--;
    this.duckCount--;
    this.gameScore += 1000;
  }

  miss() {
    this.shotCount--;
    // if mouse on-click misses duck position
  }

  roundOver() {
    if (this.shotCount === 0 || this.duckCount === 0) {
      this.roundOver = true;
      this.gameRound++;
    }
  }


}

module.exports = Round;