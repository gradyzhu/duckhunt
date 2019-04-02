const Score = require("./score.js");
const Round = require("./round.js"); 
const Cross = require("./cross.js");
const Duck = require("./duck.js");
const Environment = require("./environment.js");

class Game {
  constructor(c) {
    this.c = c;

    this.roundCount = 0;
    this.score = new Score(this.c);
    this.cross = new Cross(this.c);
    this.duck = new Duck(this.c);
    this.environment = new Environment(this.c);

    this.round = new Round(
      this.c, 
      this.score, 
      this.roundCount, 
      this.cross
    );

    this.loop = this.loop.bind(this);
  }

  loop() {
    this.update();
    this.render();
    requestAnimationFrame(this.loop);
  }

  update() {
    this.duck.update();
    this.score.update();
    this.cross.update();
  }
  
  render() {
    this.duck.render();
    this.environment.render();
    this.score.render();
    this.cross.render();
  }

  start() {
    // while (!gameOver()) {
    //   current = 
    //   current.playRound();
    // }
  }

  newRound() {
    this.round = new Round(this.c, this.score, this.roundCount, this.cross);
  }

  gameOver() {
    return (this.round.ducksShot < 5 && this.round.ducksLeft === 0);
  }

}

module.exports = Game;