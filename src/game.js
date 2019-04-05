const Round = require("./round.js"); 
const Cross = require("./cross.js");
const Scoreboard = require("./scoreboard.js");
const Environment = require("./environment.js");

class Game {
  constructor(c) {
    this.c = c;
    this.gameOver = false;
    this.roundCount = 1;

    this.scoreboard = new Scoreboard(this.c);
    this.environment = new Environment(this.c);
    this.cross = new Cross(this.c, this.scoreboard);
    this.round = new Round(this.c, this.roundCount, this.cross, this.scoreboard);

    this.loop = this.loop.bind(this);
  }

  loop() {
    this.update();
    this.render();
    requestAnimationFrame(this.loop);
  }

  update() {
    this.round.update();
    this.scoreboard.update();
    this.cross.update();
  }
  
  render() {
    this.round.render();
    this.environment.render();
    this.scoreboard.render();
    this.cross.render();
  }

  
  newRound() {
    this.round = new Round(this.c, this.score, this.roundCount, this.cross, this.scoreboard);
  }
  
  gameOver() {
    if (this.round.ducksShot < 5 && this.round.ducksLeft === 0) {
      this.gameOver = true;
    }
  }
  
  // start() {
  //   while (!this.gameOver) {
  //     this.newRound();
  //     this.round.play();
  //   }
  // }
}

module.exports = Game;