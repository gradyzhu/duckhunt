const Score = require("./score.js");
const Shots = require("./shots");
const Ducks = require("./ducks");

class Scoreboard {
  constructor(c) {
    this.c = c;
    this.score = new Score(this.c);
    this.points = this.score.points;
    
    this.shots = new Shots(this.c);
    this.ducks = new Ducks(this.c);
  }

  render() {
    this.score.render();
    this.shots.render();
    this.ducks.render();
  }

  update() {
    this.score.update();
    this.shots.update();
    this.ducks.update();
  }
}

module.exports = Scoreboard;