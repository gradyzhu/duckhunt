const Duck = require("./duck.js");
const Dog = require("./dog.js");

class Wave {
  constructor(c, cross, scoreboard, roundCount, waveCount) {
    this.c = c;
    this.cross = cross;
    this.scoreboard = scoreboard;
    this.roundCount = roundCount;
    this.waveCount = waveCount;
    this.waveOver = false;
    this.duck = new Duck(this.c, this.cross, this.roundCount, this.scoreboard);
    this.dog = new Dog(this.c);
  }

  render() {
    this.duck.render();
    // this.dog.renderHit();
    // this.dog.renderMiss();
  }

  update() {
    this.duckHit();
    this.duck.update();
    this.dog.update();
    this.isWaveOver();
  }

  updateDucks() {
    this.scoreboard.ducks.arr[this.waveCount] = 1;
  }

  updateScore() {
    if (this.roundCount === 1) {
      this.scoreboard.score.points += 1000;
    } else {
      this.scoreboard.score.points += 1000 + 500 * (this.roundCount - 1);
    }
  }

  duckHit() {
    if (this.duck.hit) {
      this.duck.hit = false;
      this.updateDucks();
      this.waveCount = this.waveCount + 1;
      this.updateScore();
    }
  }

  isWaveOver() {
    if (this.duck.fallFin || this.duck.flyFin) {
      this.waveOver = true;
    }
  }
}
module.exports = Wave;