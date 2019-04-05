const Duck = require("./duck.js");

class Wave {
  constructor(c, cross, ducks, scoreboard, roundCount, waveCount) {
    this.c = c;
    this.cross = cross;
    this.ducks = ducks;
    this.scoreboard = scoreboard;
    this.roundCount = roundCount;
    this.waveCount = waveCount;
    this.waveOver = false;
    this.duck = new Duck(this.c, this.cross); 
  }

  render() {
    this.duck.render();
  }

  update() {
    this.duck.update();
    this.isWaveOver();
    if (this.waveOver) {
      this.ducks.arr[this.waveCount] = 1;
    }
  }

  updateScore() {
    this.scoreboard.score.points += 1000 + 500 * this.roundCount;
  }

  duckHit() {
    if (this.duck.hit) {
      this.updateScore();
      return true;
    }
  }

  noShots() {
    return this.scoreboard.shots.count === 0;
  }

  isWaveOver() {
    if (this.duckHit() || this.noShots()) {
      this.waveOver = true;
    }
  }
  
  resetShots() {
    this.scoreboard.shots.count = 3;
  }
}
module.exports = Wave;