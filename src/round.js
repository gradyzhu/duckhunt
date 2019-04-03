const Shot = require("./shot.js");
const Duck = require("./duck.js");
const Cross = require("./cross.js");

class Round {
  constructor(c, score, roundCount) {
    this.c = c;
    this.shotCount = 3;
    this.roundCount = roundCount;
    this.ducksLeft = 10;
    this.duckPosition = [0, 0];

    this.roundOver = false;
  }

  // play() {
  //   while (!this.roundOver) {
  //     // spawn duck
  //     // 
  //   }
  // }

  render() {
    this.c.font = "20px Pixel Emulator";
    this.c.fillStyle = "white";
    this.c.fillText(`ROUND: ${this.roundCount}`, 200, 50);
    this.c.fillText(`${this.shotCount}`, 50, 430);
    this.c.fillText(`${this.ducksLeft}`, 180, 430);
  }
  
  // collision(cross, duck) {
  //   if cross.position
  // }

  hit() {
    // if mouse on-click matches duck position
    this.shotCount--;
    this.score.points += 1000;
  }

  miss() {
    this.shotCount--;
    // if mouse on-click misses duck position
  }

  updateScore(score) {

  }

  over() {
    if (this.shotCount === 0 || this.ducksLeft === 0) {
      this.roundOver = true;
    }
  }
}

module.exports = Round;