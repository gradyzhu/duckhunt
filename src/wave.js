const Duck = require("./duck.js");

class Wave {
  constructor(c, cross, shots, ducks, scoreboard, roundCount) {
    this.c = c;
    this.cross = cross;
    this.ducks = ducks;
    this.shots = shots;
    this.scoreboard = scoreboard;
    this.roundCount = roundCount;
    this.duck = new Duck(this.c, this.cross);
    this.waveOver = false;
    this.waveCount = 0;
  }

  render() {
    this.duck.render();
  }

  update() {
    this.duck.update();
    if (this.waveCount === 10) return;

    this.isWaveOver();

    if (this.waveOver) {
      // console.log(this.shots.count);
      this.waveOver = false;
      this.ducks.arr[this.waveCount] = 1;
      this.shots.arr = [0,0,0];
      this.updateScore();
      this.duck = new Duck(this.c, this.cross);
    }
    //play dog animation  
  }

  // spawn() {
  //   this.duck = new Duck(this.c, this.cross);
  // }


  updateScore() {
    this.scoreboard.points += 1000 * this.roundCount;
    console.log(this.scoreboard.points);
  }

  isWaveOver() {
    if (this.duck.hit) {
      this.waveOver = true;
    }
  }

}
module.exports = Wave;