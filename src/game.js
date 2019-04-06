const Round = require("./round.js"); 
const Cross = require("./cross.js");
const Scoreboard = require("./scoreboard.js");
const Environment = require("./environment.js");
const GameOverScreen = require("./game_over_screen.js");

class Game {
  constructor(c) {
    this.c = c;
    this.roundCount = 1;
    
    this.scoreboard = new Scoreboard(this.c);
    this.environment = new Environment(this.c);
    this.cross = new Cross(this.c, this.scoreboard);
    this.round = new Round(this.c, this.roundCount, this.cross, this.scoreboard);
    this.gameOverScreen = new GameOverScreen(this.c);
    
    this.loop = this.loop.bind(this);

    this.gameOver = false;

    // console.log(this.scoreboard.ducks);
  }

  loop() {
    this.update();
    this.render();
    requestAnimationFrame(this.loop);
  }

  update() {
    // console.log(`wavecount = ${this.round.waveCount}`);
    this.isGameOver();
    this.round.update();
    this.scoreboard.update();
    this.cross.update();

    if (this.round.roundOver) {
      this.roundCount++;
      this.newRound();
    }
  }
  
  render() {
    this.round.render();
    this.environment.render();
    this.scoreboard.render();
    this.cross.render();
    if (this.gameOver) {
      this.gameOverScreen.render();
    }
  }

  
  newRound() {
    this.round = new Round(this.c, this.score, this.roundCount, this.cross, this.scoreboard);
  }
  
  isGameOver() {
    let ducksHit = this.scoreboard.ducks.arr.filter(el => el === 1).length;
    if (ducksHit <= 0 && this.round.waveCount === 0) {
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