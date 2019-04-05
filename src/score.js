class Score {
  constructor(c) {
    this.c = c;
    this.points = 0;
  }

  render() {
    // console.log("wowwww");
    this.c.font = "20.5px Pixel Emulator";
    this.c.fillStyle = "white";
    this.c.textAlign = "end"; 
    this.c.fillText(`${this.points}`, 480,430);

    this.c.font = "20px Pixel Emulator";
    this.c.fillStyle = "white";
    // this.c.fillText(`${this.shotCount}`, 50, 430);
    // this.c.fillText(`${this.ducksLeft}`, 180, 430);
  }

  update() {

  }
}

module.exports = Score;