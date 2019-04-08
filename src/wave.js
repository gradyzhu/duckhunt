const Duck = require("./duck.js");
const WaveHitAni = require("./wave_hit_ani.js");
const WaveMissAni = require("./wave_miss_ani.js");

class Wave {
  constructor(c, cross, scoreboard, roundCount, waveCount) {
    this.c = c;
    this.cross = cross;
    this.scoreboard = scoreboard;
    this.roundCount = roundCount;
    this.waveCount = waveCount;
    this.waveOver = false;
    this.duck = new Duck(this.c, this.cross, this.roundCount, this.scoreboard);
    this.waveHitAni = new WaveHitAni(this.c);
    this.waveMissAni = new WaveMissAni(this.c);
  }

  render() {
    this.duck.render();
    if (this.duck.fallFin) {
      this.waveHitAni.render();
    }
    if (this.duck.flyFin) this.waveMissAni.render();
  }

  update() {
    this.duckHit();
    this.duck.update();
    this.waveHitAni.update();
    this.waveMissAni.update();
    this.isWaveOver();
  }

  updateDucks() {
    this.scoreboard.ducks.arr[this.waveCount] = 1;
  }

  updateScore() {
    if (this.roundCount === 1) {
      this.scoreboard.score.points += 500;
    } else {
      this.scoreboard.score.points += 500 + 500 * (this.roundCount - 1);
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
    if (
      (this.duck.fallFin && this.waveHitAni.smileEndFin) ||
      (this.duck.flyFin && this.waveMissAni.laughEndFin))  {
      this.waveOver = true;
    }
  }
}
module.exports = Wave;