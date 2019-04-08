const Score = require("./score.js");
const Shots = require("./shots");
const Ducks = require("./ducks");

class Scoreboard {
  constructor(c) {
    this.c = c;
    this.roundCount = 1;
    this.score = new Score(this.c);
    this.shots = new Shots(this.c);
    this.ducks = new Ducks(this.c);
  }

  render() {
    this.score.render();
    this.shots.render();
    this.ducks.render();

    this.c.fillStyle = "black";
    this.c.fillRect(48,384,47,21.5);
    this.c.fillStyle = "#C5F652";
    this.c.font = "16px Pixel Emulator";
    this.c.fillText(`R=${this.roundCount}`, 89.5, 400);
  }

  renderPts(posX, posY) {
    this.c.textAlign = "center"; 
    this.c.fillStyle = "white";
    this.c.font = "12px Pixel Emulator";
    this.c.fillText(`${this.roundCount * 500}`, posX, posY);
    console.log(this.roundCount);
  }

  update() {
    this.ducks.update();
  }
}

module.exports = Scoreboard;