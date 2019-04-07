class StartAni {
  constructor(c) {
    this.c = c;
    this.dogPosX = 0;
    this.dogPosY = 275;

    //walk and sniff
    this.sniff1Fin = false;
    this.sniff2Fin = false;
    this.sniff1Count = 0;
    this.sniff2Count = 0;

    this.walk1Fin = false;
    this.walk2Fin = false;
    this.walk1Count = 0;
    this.walk2Count = 0;

    this.pause1Count = 0;
    this.pause2Count = 0;

    this.sniffFrameIndex = 0;
    this.sniffTickCount = 0;
    this.sniffTicksPerFrame = 10;

    this.sniffImage = new Image();
    this.sniffImage.onload = () => this.sniffImageReady = true;
    this.sniffImage.src = "/Users/grady/Desktop/duckhunt/images/dog_sniff.png";

    this.walkFrameIndex = 0;
    this.walkTickCount = 0;
    this.walkTicksPerFrame = 6;

    this.walkImage = new Image();
    this.walkImage.onload = () => this.walkImageReady = true;
    this.walkImage.src = "/Users/grady/Desktop/duckhunt/images/dog_walk.png";

    //jump
    this.shockFin = false;
    this.shockCount = 0;

    this.jumpStartFin = false;
    this.jumpStartCount = 0;

    this.jumpEndFin = false;
    this.jumpEndCount = 0;

    this.jumpImage = new Image();
    this.jumpImage.onload = () => this.jumpImageReady = true;
    this.jumpImage.src = "/Users/grady/Desktop/duckhunt/images/dog_jump.png";
  }

  render() {
    if (!this.sniff2Fin) {
      this.renderWalkAndSniff();
    } else {
      this.renderJump();
    }
  }

  update() {
    this.updateSniff();
    this.updateWalk();
    this.isWalk1Fin();
    this.isWalk2Fin();
    this.isSniff1Fin();
    this.isSniff2Fin();
    this.isShockFin();
    this.isJumpStartFin();
    this.isJumpEndFin();
  }

  //walk and sniff render functions
  renderWalkAndSniff() {
    if (!this.walk1Fin) {
      this.renderWalk();
      this.dogPosX++;
      this.walk1Count++;
    }
    if (this.walk1Fin && !this.sniff1Fin) {
      this.renderSniff();
      this.sniff1Count++;
    }
    if (this.walk1Fin && this.sniff1Fin && !this.walk2Fin) {
      this.renderWalk();
      this.dogPosX++;
      this.walk2Count++;
    }
    if (this.walk1Fin && this.sniff1Fin && this.walk2Fin) {
      this.renderSniff();
      this.sniff2Count++;
    }
  }

  renderWalk() {
    this.c.drawImage(this.walkImage, 
      this.walkFrameIndex * 180 / 3, 0,
      60, 60, 
      this.dogPosX, 275, 
      125, 125);
  }

  renderSniff() {
    this.c.drawImage(this.sniffImage, 
      this.sniffFrameIndex * 120 / 2, 0,
      60, 60, 
      this.dogPosX, 275, 
      125, 125);
  }

  // sprite update functions
  updateSniff() {
    this.sniffTickCount++;
    if (this.sniffTickCount > this.sniffTicksPerFrame) {
      this.sniffTickCount = 0;
      this.sniffFrameIndex++;
    }
    if (this.sniffFrameIndex > 1) {
      this.sniffFrameIndex = 0;
    }
  }

  updateWalk() {
    this.walkTickCount++;
    if (this.walkTickCount > this.walkTicksPerFrame) {
      this.walkTickCount = 0;
      this.walkFrameIndex++;
    }
    if (this.walkFrameIndex > 2) {
      this.walkFrameIndex = 0;
    }
  }
  
  // jump render functions
  renderShock() {
    this.c.drawImage(this.jumpImage, 
      0, 0,
      60, 60, 
      this.dogPosX, 275, 
      125, 125);
    }
    
  renderJumpStart() {
    this.c.drawImage(this.jumpImage, 
      60, 0,
      60, 60, 
      this.dogPosX, this.dogPosY, 
      125, 125); 
    }
    
  renderJumpEnd() {
    this.c.drawImage(this.jumpImage, 
      120, 0,
      60, 60, 
      this.dogPosX, this.dogPosY, 
      125, 125);
    }
        
  renderJump() {
    if (!this.shockFin) {
      this.c.drawImage(this.jumpImage, 
        0, 0,
        60, 60, 
        this.dogPosX, 275, 
        125, 125);
      this.shockCount++;
    }
    if (this.shockFin && !this.jumpStartFin) {
      this.renderJumpStart();
      this.jumpStartCount++;
    }
    if (this.jumpStartFin && this.shockFin) {
      this.renderJumpEnd();
      this.jumpEndCount++;
    }
    if (this.jumpEndFin) {
      this.jumpImage.src = "";
    }
  }

  // jump update functions
  isWalk1Fin() {if (this.walk1Count > 50) this.walk1Fin = true;}
  isSniff1Fin() {if (this.sniff1Count > 40) this.sniff1Fin = true;}
  isWalk2Fin() {if (this.walk2Count > 40) this.walk2Fin = true;}
  isSniff2Fin() {if (this.sniff2Count > 40) this.sniff2Fin = true;}

  isShockFin() {
    if (this.shockCount > 20) {
      this.shockFin = true;
      this.dogPosX += 2;
      this.dogPosY -= 1.5;
    }
  }
  isJumpStartFin() {
    if (this.jumpStartCount > 60) {
      this.jumpStartFin = true;
      this.dogPosY += 8;
      this.dogPosX -= 2;
    }
  }
  isJumpEndFin() {if (this.jumpEndCount > 7) this.jumpEndFin = true;}
}

module.exports = StartAni;