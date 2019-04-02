const Shot = require("./shot.js");
const Duck = require("./duck.js");
const Cross = require("./cross.js");

class Round {
  constructor(gc, score, roundCount, cross) {
    this.gc = gc;
    this.shotCount = 3;

    this.score = score;
    this.roundCount = roundCount;
    this.ducksLeft = 10;
    this.duckPosition = [0, 0];

    this.roundOver = false;
    this.cross = cross;
    this.crossPos = [this.cross.posX, this.cross.posY];
    this.draw();
  }

  playRound() {
    this.gc.canvas.addEventListener("click", console.log("click"));
  }

  draw() {
    this.gc.font = "20px Pixel Emulator";
    this.gc.fillStyle = "white";
    this.gc.fillText(`ROUND: ${this.roundCount}`, 200, 50);
    this.gc.fillText(`${this.shotCount}`, 50, 430);
    this.gc.fillText(`${this.ducksLeft}`, 180, 430);
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
    this.score += 1000;
  }

  miss() {
    this.shotCount--;
    // if mouse on-click misses duck position
  }

  over() {
    if (this.shotCount === 0 || this.ducksLeft === 0) {
      this.roundOver = true;
    }
  }


}

module.exports = Round;