class Ducks {
  constructor(c) {
    this.c = c;
    this.waveCount = 0;
    this.arr = [0,0,0,0,0,0,0,0,0,0];

    this.tickCount = 0;
    this.ticksPerFrame = 3;

    this.triPos1X = 192;
    this.triPos2X = 202;
    this.triPos3X = 197;

    this.duckImage = new Image();
    this.duckImage.onload = () => this.duckImageReady = true;
    this.duckImage.src = "images/missed_duck.png";

    this.hitDuckImage = new Image();
    this.hitDuckImage.onload = () => this.hitDuckImageReady = true;
    this.hitDuckImage.src = "images/hit_duck.png";
  }
  
  render() {
    if (!this.duckImageReady) return;
    if (!this.hitDuckImageReady) return;

    this.c.beginPath();
    this.c.moveTo(this.triPos1X + this.waveCount * 16, 395);
    this.c.lineTo(this.triPos2X + this.waveCount * 16, 395);
    this.c.lineTo(this.triPos3X + this.waveCount * 16, 405);
    this.c.fillStyle = "white";
    this.c.fill();

    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === 0) {
        this.c.drawImage(
          this.duckImage,
          0, 0, 25, 25,
          175+ ((i+1)*16), 415,
          16, 16
        );
      }
      if (this.arr[i] === 1) {
        this.c.drawImage(
          this.hitDuckImage,
          0, 0, 25, 25,
          175 + ((i+1)*16), 415,
          16, 16
        );
      }
    }
  }

  update() {
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
    }
  }
}

module.exports = Ducks;