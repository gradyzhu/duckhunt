const StartAni = require("./start_ani.js");

class Dog {
  constructor(c) {
    this.c = c;
    this.startAni = new StartAni(this.c);

    this.hitImage = new Image();
    this.hitImage.onload = () => this.hitImageReady = true;
    this.hitImage.src = "/Users/grady/Desktop/duckhunt/images/dog_single_duck.png";

    this.missFrameIndex = 0;
    this.missTickCount = 0;
    this.missTicksPerFrame = 4;

    this.missImage = new Image();
    this.missImage.onload = () => this.missImageReady = true;
    this.missImage.src = "/Users/grady/Desktop/duckhunt/images/dog_laugh.png";
  }

  renderStartAni() {
    this.startAni.render();
  }

  renderHit() {
    this.c.drawImage(this.hitImage, 
      0, 0,
      60, 60, 
      280, 238, 
      111, 111);
  }

  renderMiss() {
    this.c.drawImage(this.missImage, 
      this.missFrameIndex * 120 / 2, 0,
      60, 60, 
      204, 238, 
      111, 111);
  }

  update() {
    this.startAni.update();
    this.missTickCount++;
    if (this.missTickCount > this.missTicksPerFrame) {
      this.missTickCount = 0;
      this.missFrameIndex++;
    }
    if (this.missFrameIndex > 1) {
      this.missFrameIndex = 0;
    }
  }
}

module.exports = Dog;