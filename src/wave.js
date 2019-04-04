const Duck = require("./duck.js");

class Wave {
  constructor(c, score, cross) {
    this.c = c;
    this.score = score;
    this.cross = cross;

    this.duck = new Duck(this.c, this.cross);
    this.shots = [0,0,0];
    this.ducks = [0,1,0,0,0,1,0,0,0,0];
    this.waveCount = 0;

    this.duckImage = new Image();
    this.duckImage.onload = () => this.duckImageReady = true;
    this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/missed_duck.png";

    this.hitDuckImage = new Image();
    this.hitDuckImage.onload = () => this.hitDuckImageReady = true;
    this.hitDuckImage.src = "/Users/grady/Desktop/duckhunt/images/hit_duck.png";
  }

  render() {
    if (!this.duckImageReady) return;
    if (!this.hitDuckImageReady) return;

    for (let i = 0; i < this.ducks.length; i++) {
      if (this.ducks[i] === 0) {
        this.c.drawImage(this.duckImage,
          0, 0,
          25, 25,
          200 + (i+1)*19, 200,
          20, 20
        );
      }
      if (this.ducks[i] === 1) {
        this.c.drawImage(this.hitDuckImage,
          0, 0,
          25, 25,
          200 + (i+1)*19, 200,
          20, 20
        );
      }
    }
  }

  update() {
    if (this.waveCount === 10) return;
    if (this.waveOver()) {
      this.updateScore();
      this.ducks[this.waveCount] = 1;
      this.waveCount++;
      this.shots = [0,0,0];
      this.spawn();
    }
    //play dog animation  
  }

  spawn() {
    this.duck = new Duck(this.c, this.cross);
  }

  updateScore() {
    this.score += 1000 * this.waveCount;
  }

  waveOver() {
    let count = this.shots.filter(el => el === 0);
    return count === 0 || this.duck.hit;
  }
}
module.exports = Wave;