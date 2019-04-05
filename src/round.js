const Wave = require("./wave.js");
const Ducks = require("./ducks.js");

class Round {
  constructor(c, roundCount, cross, scoreboard) {
    this.c = c;
    this.cross = cross;
    this.roundCount = roundCount;
    this.scoreboard = scoreboard;
    this.ducks = new Ducks(this.c);
    this.waveCount = 0;

    this.wave = new Wave(this.c, this.cross, this.scoreboard, this.roundCount, this.waveCount);

    this.roundOver = false;
  }

  start() {
    while (!this.roundOver) {
      
    }
  }

  render() {
    this.wave.render();
    // console.log(this.waveCount);
    // console.log(this.ducks.arr);
  }
  
  update() {
    this.wave.update();
    if (this.wave.waveOver) {
      this.waveCount++;
      this.resetShots();
      this.newWave();
    }
  }

  newWave() {
    this.wave = new Wave(this.c, this.cross, this.scoreboard, this.roundCount, this.waveCount);
  }

  roundOver() {
    let count = this.ducks.filter(el => el === 0);
    return count < 5;
  }
    
  resetShots() {
    this.scoreboard.shots.count = 3;
  }
}

module.exports = Round;