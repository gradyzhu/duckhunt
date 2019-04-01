const Shot = require("./shot.js");
const Duck = require("./duck.js");
const Mouse = require("./mouse.js");

class Round {

  constructor(score, roundCount, mouse) {
    this.shotCount = 3;
    this.duckCount = 3;
    this.roundCount = roundCount;
    this.duckPosition = [0, 0];

    this.roundOver = false;
    this.mouse = mouse;
    this.mousePosition = [this.mouse.posX, this.mouse.posY];
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