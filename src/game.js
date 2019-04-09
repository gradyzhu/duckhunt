const Round = require("./round.js"); 
const Cross = require("./cross.js");
const Scoreboard = require("./scoreboard.js");
const Environment = require("./environment.js");
const GameOverScreen = require("./game_over_screen.js");
const Ducks = require("./ducks");
const GameStartAni = require("./game_start_ani");
const RoundScreen = require("./round_screen");

class Game {
  constructor(c) {
    this.c = c;
    this.roundCount = 1;
    this.start = true;
    
    this.gameStartAni = new GameStartAni(this.c);
    this.roundScreen = new RoundScreen(this.c, this.roundCount);
    this.scoreboard = new Scoreboard(this.c);
    this.environment = new Environment(this.c);
    this.cross = new Cross(this.c, this.scoreboard);
    this.round = new Round(this.c, this.roundCount, this.cross, this.scoreboard);

    this.isNewRound = false;
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
    this.isStart();
    this.isGameOver();
    this.gameStartAni.update();
    this.round.update();
    this.scoreboard.update();
    this.cross.update();
    
    if (this.round.roundOver) {
      this.scoreboard.roundCount++;
      this.roundCount++;
      this.newDucks();
      this.newRound();
      this.newRoundScreen();
    }
    
    this.roundScreen.update();
  }
  
  render() {
    this.environment.render();

    if (this.start) {
      this.gameStartAni.render();
      this.isNewRound = true;
    }

    if (!this.start && !this.gameOver) {
      this.round.render();
      this.environment.render();
    }
    
    if (this.isNewRound) {
      this.roundScreen.render();
      if (this.roundScreen.aniFin) {
        this.isNewRound = false;
      }
    }

    this.scoreboard.render();
    if (this.gameOver) {this.gameOverScreen.render();}
    this.cross.render();
  }
  
  newRoundScreen() {
    this.roundScreen = new RoundScreen(this.c, this.roundCount);
  }

  newRound() {
    this.round = new Round(this.c, this.roundCount, this.cross, this.scoreboard);
    this.isNewRound = true;
  }

  newDucks() {
    this.scoreboard.ducks = new Ducks(this.c);
  }

  isStart() {
    if (this.gameStartAni.jumpEndFin) {
      this.start = false;
    }
  }
  
  isGameOver() {
    let ducksHit = this.scoreboard.ducks.arr.filter(el => el === 1).length;
    if (ducksHit <= 5 && this.round.waveCount === 10) {
      this.gameOver = true;
    } 
  }
}

module.exports = Game;