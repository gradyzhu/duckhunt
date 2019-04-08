const StartAni = require("./start_ani.js");

class Dog {
  constructor(c) {
    this.c = c;
    this.startAni = new StartAni(this.c);
    this.waveAniOver = false;
    this.dogPosY = 278;

    this.smileStart = false;
    this.smilePause = false;
    this.smileFin = false;

    this.laughStart = false;
    this.laughPause = false;
    this.laughFin = false;

    this.reactionFin = false;

    this.smileAniTickCount = 0;
    this.laughAniTickCount = 0;

    this.smileImage = new Image();
    this.smileImage.onload = () => this.smileImageReady = true;
    this.smileImage.src = "/Users/grady/Desktop/duckhunt/images/dog_single_duck.png";

    this.laughFrameIndex = 0;
    this.laughTickCount = 0;
    this.laughTicksPerFrame = 4;

    this.laughImage = new Image();
    this.laughImage.onload = () => this.laughImageReady = true;
    this.laughImage.src = "/Users/grady/Desktop/duckhunt/images/dog_laugh.png";
  }

  renderStartAni() {
    this.startAni.render();
  }

  renderSmile() {
    this.c.drawImage(this.smileImage, 
      0, 0,
      60, 60, 
      280, 238, 
      111, 111);
  }

  renderLaugh() {
    this.renderLaughAni();

    this.laughAniTickCount++;
    this.c.drawImage(this.laughImage, 
      this.laughFrameIndex * 120 / 2, 0,
      60, 60, 
      204, this.dogPosY, 
      111, 111);
  }

  update() {
    this.startAni.update();
    this.laughStartCount++;

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

  isSmileFin() {
    if (this.smileCount > 60) {
      this.smileFin = true;
    }
  }

  isReactionFin() {
    if (this.smileFin || this.laughFin) {
      this.reactionFin = true;
    }
  }
}

module.exports = Dog;