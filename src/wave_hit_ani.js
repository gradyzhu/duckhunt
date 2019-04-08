class WaveHitAni {
  constructor(c) {
    this.c = c;
    this.dogPosY = 308;
    // this.dogPosX = dogPosX;
    this.smilePauseCount = 0;

    this.smileStartFin = false;
    this.smilePauseFin = false;
    this.smileEndFin = false;

    this.smileImage = new Image();
    this.smileImage.onload = () => this.smileImageReady = true;
    this.smileImage.src = "/Users/grady/Desktop/duckhunt/images/dog_single_duck.png";
  }

  render() {
    if (!this.smileStartFin) {
      this.dogPosY--;
    }
    if (this.smileStartFin) {
      this.smilePauseCount++;
    }
    this.c.drawImage(this.smileImage, 
      0, 0,
      60, 60, 
      204, this.dogPosY, 
      111, 111);
  }

  update() {
    this.isSmileStartFin();
    this.isSmilePauseFin();
    this.isSmileEndFin();
  }

  isSmileStartFin() {
    if (this.dogPosY === 248) this.smileStartFin = true;
  }

  isSmilePauseFin() {
    if (this.smilePauseCount > 30) {
      this.smilePauseFin = true;
      this.dogPosY++;}
  }

  isSmileEndFin() {
    if (this.dogPosY === 310) this.smileEndFin = true;
  }
}

module.exports = WaveHitAni;