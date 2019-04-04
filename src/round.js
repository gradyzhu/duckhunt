const Shot = require("./shot.js");
const Duck = require("./duck.js");
const Cross = require("./cross.js");

class Round {
  constructor(c, score, roundCount, cross) {
    this.c = c;
    this.score = score;
    this.roundCount = roundCount;
    this.cross = cross;
    this.duck = new Duck(this.c, this.cross);

    this.shotCount = 3;
    this.ducksLeft = 10;
    this.duckPosition = [0, 0];
    this.waveOver = false;
    this.roundOver = false;
    this.collision = this.duck.hit;
  }

  // play() {
  //   while (!this.roundOver) {
  //     // spawn duck
  //     // 
  //   }
  // }

  render() {
    this.duck.render();
  }
  
  update() {
    this.duck.update();
  }

  hit() {

    // if mouse on-click matches duck position
    if (this.duck.hit) {
      this.shotCount--;
      this.updateScore();
      this.newSpawn();
    }
  }

  miss() {
    this.shotCount--;
    // if mouse on-click misses duck position
  }

  collision() {
    if (
      this.cross.clickPosX > this.duck.posX && 
      this.cross.clickPosX < this.duck.posX + 40 &&
      this.cross.clickPosY > this.duck.posY &&
      this.cross.clickPosY < this.duck.posY + 40
    ) {
      this.collision = true;
      return true;
    }
  }

  updateScore() {
    this.score += 1000 * this.roundCount();
  }

  waveOver() {
    return this.shotCount === 0;
  }

  roundOver() {
    return this.ducksLeft === 0;
  }
}

module.exports = Round;