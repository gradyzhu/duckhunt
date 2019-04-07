class Dog {
  constructor(c) {
    this.c = c;
    this.currPosX = 0;
    this.pauseCount = 0;
    this.pauseCount2 = 0;

    this.shockFin = false;
    this.jumpStartFin = false;
    this.jumpEndFin = false;

    this.hitImage = new Image();
    this.hitImage.onload = () => this.hitImageReady = true;
    this.hitImage.src = "/Users/grady/Desktop/duckhunt/images/dog_single_duck.png";

    this.missFrameIndex = 0;
    this.missTickCount = 0;
    this.missTicksPerFrame = 4;

    this.missImage = new Image();
    this.missImage.onload = () => this.missImageReady = true;
    this.missImage.src = "/Users/grady/Desktop/duckhunt/images/dog_laugh.png";

    // this.sniffFrameIndex = 0;
    // this.sniffTickCount = 0;
    // this.sniffTicksPerFrame = 10;

    // this.sniffImage = new Image();
    // this.sniffImage.onload = () => this.sniffImageReady = true;
    // this.sniffImage.src = "";

    // this.walkFrameIndex = 0;
    // this.walkTickCount = 0;
    // this.walkTicksPerFrame = 6;

    // this.walkImage = new Image();
    // this.walkImage.onload = () => this.walkImageReady = true;
    // this.walkImage.src = "/Users/grady/Desktop/duckhunt/images/dog_walk.png";

    // this.shockImage = new Image();
    // this.shockImage.onload = () => this.shockImageReady = true;
    // this.shockImage.src = "/Users/grady/Desktop/duckhunt/images/dog_jump.png";

    // this.jumpImage = new Image();
    // this.jumpImage.onload = () => this.jumpImageReady = true;
    // this.jumpImage.src = "/Users/grady/Desktop/duckhunt/images/dog_jump.png";

    // this.jumpImage2 = new Image();
    // this.jumpImage2.onload = () => this.jumpImage2Ready = true;
    // this.jumpImage2.src = "/Users/grady/Desktop/duckhunt/images/dog_jump.png";
  }

  renderFront() {
    this.renderWalk();
    this.renderSniff();
    this.renderJump();
  }

  renderSniff() {
    this.c.drawImage(
      this.sniffImage, 
      this.sniffFrameIndex * 120 / 2, 0,
      60, 60, 
      this.currPosX, 275, 
      125, 125);
  }

  renderHit() {
    this.c.drawImage(
      this.hitImage, 
      0, 0,
      60, 60, 
      280, 238, 
      111, 111);
  }

  renderMiss() {
    this.c.drawImage(
      this.missImage, 
      this.missFrameIndex * 120 / 2, 0,
      60, 60, 
      204, 238, 
      111, 111);
  }

  renderWalk() {
    this.c.drawImage(
      this.walkImage, 
      this.walkFrameIndex * 180 / 3, 0,
      60, 60, 
      this.currPosX, 275, 
      125, 125);
  }

  renderJump() {
    if (!this.shockFin) {
      this.c.drawImage(
        this.jumpImage, 
        this.jumpFrameIndex * 180 / 3, 0,
        60, 60, 
        this.currPosX, 275, 
        125, 125);
    }
    if (this.shockFin) this.renderJumpStart();
    if (this.jumpStartFin) this.renderJumpEnd();
  }

  update() {
    this.isShockFin();
    this.isJumpStartFin();
    this.isJumpEndFin();

    this.missTickCount++;
    if (this.missTickCount > this.missTicksPerFrame) {
      this.missTickCount = 0;
      this.missFrameIndex++;
    }
    if (this.missFrameIndex > 1) {
      this.missFrameIndex = 0;
    }

    this.sniffTickCount++;
    if (this.sniffTickCount > this.sniffTicksPerFrame) {
      this.sniffTickCount = 0;
      this.sniffFrameIndex++;
    }
    if (this.sniffFrameIndex > 1) {
      this.sniffFrameIndex = 0;
    }

    this.walkTickCount++;
    if (this.walkTickCount > this.walkTicksPerFrame) {
      this.walkTickCount = 0;
      this.walkFrameIndex++;
    }
    if (this.walkFrameIndex > 2) {
      this.walkFrameIndex = 0;
    }

    this.jumpTickCount++;
    if (this.jumpTickCount > this.jumpTicksPerFrame) {
      this.jumpTickCount = 0;
      this.jumpFrameIndex++;
    }
    if (this.jumpFrameIndex > 2) {
      this.jumpFrameIndex = 0;
    }

    if (this.currPosX < 60) {
      this.currPosX++;
    }

    if (this.currPosX >= 60) {
      this.sniffImage.src = "/Users/grady/Desktop/duckhunt/images/dog_sniff.png";
      this.walkImage.src = "";
      this.pauseCount++;
    }

    if (this.pauseCount > 70 && this.currPosX < 130) {
      this.walkImage.src = "/Users/grady/Desktop/duckhunt/images/dog_walk.png";
      this.sniffImage.src = "";
      this.currPosX++;
    }

    if (this.currPosX >= 130) {
      this.sniffImage.src = "/Users/grady/Desktop/duckhunt/images/dog_sniff.png";
      this.walkImage.src = "";
      this.pauseCount2++;
    }

    if (this.pauseCount2 > 70) {
      this.sniffImage.src = "";
      this.jumpImage.src = "/Users/grady/Desktop/duckhunt/images/dog_jump.png";
      this.pauseCount2++;
    }
  }
}

module.exports = Dog;