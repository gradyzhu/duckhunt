const Round = require("./round.js"); 
const Cross = require("./cross.js");
const Scoreboard = require("./scoreboard.js");
const Environment = require("./environment.js");
const GameOverScreen = require("./game_over_screen.js");
const Ducks = require("./ducks");
const Dog = require("./dog.js");

class Game {
  constructor(c) {
    this.c = c;
    this.roundCount = 1;
    
    this.dog = new Dog(this.c);
    this.scoreboard = new Scoreboard(this.c);
    this.environment = new Environment(this.c);
    this.cross = new Cross(this.c, this.scoreboard);
    this.round = new Round(this.c, this.roundCount, this.cross, this.scoreboard);
    this.gameOverScreen = new GameOverScreen(this.c);
    this.loop = this.loop.bind(this);
    this.gameOver = false;
  }

  loop() {
    this.update();
    this.render();
    requestAnimationFrame(this.loop);
  }

  update() {
    this.isGameOver();
    this.dog.update();
    this.round.update();
    this.scoreboard.update();
    this.cross.update();
    if (this.round.roundOver) {
      this.roundCount++;
      this.newScoreboard();
      this.newRound();
    }
  }
  
  render() {
    this.round.render();
    this.environment.render();
    this.dog.renderFront();
    this.scoreboard.render();
    if (this.gameOver) {
      this.gameOverScreen.render();
    }
    this.cross.render();
  }
  
  newRound() {
    this.round = new Round(this.c, this.roundCount, this.cross, this.scoreboard);
  }

  newScoreboard() {
    this.scoreboard.ducks = new Ducks(this.c);
  }
  
  isGameOver() {
    let ducksHit = this.scoreboard.ducks.arr.filter(el => el === 1).length;
    if (ducksHit <= 5 && this.round.waveCount === 10) {
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