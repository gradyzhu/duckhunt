class WaveMissAni {
  constructor(c) {
    this.c = c;
    this.dogPosY = 278;

    this.laughStart = false;
    this.laughPause = false;
    this.laughFin = false;

    this.laughAniTickCount = 0;

    this.laughFrameIndex = 0;
    this.laughTickCount = 0;
    this.laughTicksPerFrame = 4;

    this.laughImage = new Image();
    this.laughImage.onload = () => this.laughImageReady = true;
    this.laughImage.src = "/Users/grady/Desktop/duckhunt/images/dog_laugh.png";
  }

  render() {
    this.laughAniTickCount++;
    this.c.drawImage(this.laughImage, 
      this.laughFrameIndex * 120 / 2, 0,
      60, 60, 
      204, this.dogPosY, 
      111, 111);
  }

  update() {
    this.isLaughStartFin();
    this.isLaughPauseFin();
    this.isLaughFin();

    this.laughTickCount++;
    if (this.laughTickCount > this.laughTicksPerFrame) {
      this.laughTickCount = 0;
      this.laughFrameIndex++;
    }
    if (this.laughFrameIndex > 1) {
      this.laughFrameIndex = 0;
    }
  }

  //walk and sniff render functions
  renderLaughAni() {
    if (this.laughStart && this.dogPosY > 238) {
      this.laughCount++;
      this.dogPosY--;
    }
    if (this.laughPause && this.dogPosY < 238) {
      this.dogPosY = 238;
    }
    if (this.laughStart && this.laughPause && !this.laughFin) {
      this.dogPosY++;
    }
  }

  isLaughStartFin() {
    if (this.laughStartCount > 20) {
      this.laughStartFin = true;
    }
  }

  isLaughPauseFin() {
    if (this.laughAniTickCount > 40) {
      this.laughPauseFin = true;
    }
  }

  isLaughFin() {
    if (this.laughAniTickCount > 60) {
      this.laughFin = true;
    }
  }

  isReactionFin() {
    if (this.laughFin) {
      this.reactionFin = true;
    }
  }
}

module.exports = WaveMissAni;