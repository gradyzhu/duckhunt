const Shots = require("./shots.js");
const Wave = require("./wave.js");
const Ducks = require("./ducks.js");

class Round {
  constructor(c, roundCount, cross, scoreboard) {
    this.c = c;
    this.cross = cross;
    this.roundCount = roundCount;
    this.scoreboard = scoreboard;

    this.shots = new Shots(this.c);
    this.ducks = new Ducks(this.c);
    this.wave = new Wave(this.c, this.cross, this.shots, this.ducks, this.scoreboard, this.roundCount);
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
    // this.duck.update();
  }

  newWave() {
    // if mouse on-click matches duck position

  }

  miss() {
    this.shots--;
    // if mouse on-click misses duck position
  }

  // collision() {
  //   if (
  //     this.cross.clickPosX > this.duck.posX && 
  //     this.cross.clickPosX < this.duck.posX + 40 &&
  //     this.cross.clickPosY > this.duck.posY &&
  //     this.cross.clickPosY < this.duck.posY + 40
  //   ) {
  //     this.collision = true;
  //     return true;
  //   }
  // }

  // updateScore() {
  //   this.score += 1000 * this.roundCount();
  // }

  // waveOver() {
  //   return this.shotCount === 0 || this.duck.hit;
  // }

  roundOver() {
    let count = this.ducks.filter(el => el === 0);
    return count < 5;
  }
}

module.exports = Round;