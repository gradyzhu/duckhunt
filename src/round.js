const Shot = require("./shot.js");
const Duck = require("./duck.js");
const Mouse = require("./mouse.js");

class Round {

  constructor(c, score, roundCount, mouse) {
    this.c = c;
    this.shotCount = 3;
    this.roundCount = roundCount;
    this.duckCount = 10;
    this.duckPosition = [0, 0];

    this.roundOver = false;
    this.mouse = mouse;
    this.mousePosition = [this.mouse.posX, this.mouse.posY];
    this.draw();
  }

  draw() {
    this.c.fillText(`Round: ${this.roundCount}`, 200, 280);
    this.c.fillText(`Shot Count: ${this.shotCount}`, 200, 300);
    this.c.fillText(`Ducks Left: ${this.duckCount}`, 200, 320);
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