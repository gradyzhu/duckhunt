class WaveMissAni {
  constructor(c) {
    this.c = c;
    this.dogPosY = 308;

    this.laughStartFin = false;
    this.laughPauseFin = false;
    this.laughEndFin = false;

    this.laughPauseCount = 0;
    this.laughTickCount = 0;

    this.laughFrameIndex = 0;
    this.laughTickCount = 0;
    this.laughTicksPerFrame = 4;

    this.laughImage = new Image();
    this.laughImage.onload = () => this.laughImageReady = true;
    this.laughImage.src = "/Users/grady/Desktop/duckhunt/images/dog_laugh.png";
  }

  render() {
    if (!this.laughStartFin) {
      this.dogPosY--;
    }
    if (this.laughStartFin) {
      this.laughPauseCount++;
    }
    this.c.drawImage(this.laughImage, 
      this.laughFrameIndex * 120 / 2, 0,
      60, 60, 
      204, this.dogPosY, 
      111, 111);
  }

  update() {
    this.isLaughStartFin();
    this.isLaughPauseFin();
    this.isLaughEndFin();

    this.laughTickCount++;
    if (this.laughTickCount > this.laughTicksPerFrame) {
      this.laughTickCount = 0;
      this.laughFrameIndex++;
    }
    if (this.laughFrameIndex > 1) {
      this.laughFrameIndex = 0;
    }
  }

  isLaughStartFin() {
    if (this.dogPosY === 248) {
      this.laughStartFin = true;
    }
  }

  isLaughPauseFin() {
    if (this.laughPauseCount > 30) {
      this.laughPauseFin = true;
      this.dogPosY++;
    }
  }

  isLaughEndFin() {
    if (this.dogPosY === 310) {
      this.laughEndFin = true;
    }
  }
}

module.exports = WaveMissAni;