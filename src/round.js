const Wave = require("./wave.js");
const Ducks = require("./ducks.js");

class Round {
  constructor(c, roundCount, cross, scoreboard) {
    this.c = c;
    this.cross = cross;
    this.roundCount = roundCount;
    this.scoreboard = scoreboard;
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
  }
  
  update() {
    this.wave.update();
    this.isRoundOver();

    if (this.wave.waveOver) {
      this.waveCount++;
      this.resetShots();
      this.newWave();
    }
  }

  newWave() {
    this.wave = new Wave(this.c, this.cross, this.scoreboard, this.roundCount, this.waveCount);
  }

  isRoundOver() {
    if (this.waveCount === 10) {
      this.roundOver = true;
    }
  }
    
  resetShots() {
    this.scoreboard.shots.count = 3;
  }
}

module.exports = Round;