class Duck {
  constructor(c, cross, roundCount, scoreboard) {
    this.c = c;
    this.cross = cross;
    this.scoreboard = scoreboard;
    this.posX = Math.random() * 512;
    this.posY = 300;
    this.velX = 1 * roundCount;
    this.velY = 1 * roundCount;
    this.roundCount = roundCount;
    
    this.killPosX = 0;
    this.killPosY = 0;
    
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 4;
    
    this.fallFrameIndex = 0;
    this.fallTickCount = 0;
    this.fallTicksPerFrame = 4;

    this.dirCount = 0;
    this.dirCountMax = 0;

    this.duckImage = new Image();
    this.duckImage.onload = () => this.duckImageReady = true;
    this.duckImage.src = "";
    this.direction = this.changeDir();

    this.fallDuckImage = new Image();
    this.fallDuckImage.onload = () => this.fallDuckImageReady = true;
    this.fallDuckImage.src = "images/fall_down.png";

    this.splatCount = 0;
    this.initialBoostCount = 0;

    this.hitDuckImage = new Image();
    this.hitDuckImage.onload = () => this.hitDuckImageReady = true;
    this.hitDuckImage.src = "images/fly_hit.png";
    
    this.hit = false;
    this.splatFin = false;
    this.falling = false;
    this.flyAway = false;
    this.fallFin = false;
    this.flyFin = false;
    this.initialBoost = true;

    this.touchingLeftEdge = false;
    this.touchingRightEdge = false;
    this.touchingTopEdge = false;
    this.touchingBottomEdge = false;
  }

  render() {
    if (!this.duckImageReady) return;
    if (!this.fallDuckImageReady) return;

    if (this.initialBoost) {
      this.posY -= 5;
      this.initialBoostCount++;
    }

    this.renderFly();

    if (this.falling && !this.splatFin) {
      this.posY = this.posY;
      this.splatCount++;
      this.renderSplat();
    }
    if (this.falling && this.splatFin) {
      this.renderFall();
    }
  }

  renderFly() {
    this.c.drawImage(this.duckImage, 
      this.frameIndex * 108 / 3, 0, 
      36, 36, 
      this.posX, this.posY, 
      70, 70
    );

    if (this.flyAway) {
      this.c.font = "20.5px Pixel Emulator";
      this.c.fillStyle = "white";
      this.c.textAlign = "center"; 
      this.c.fillText(`FLY AWAY`, 256, 148);
    }
  }
  

  renderFall() {
    this.scoreboard.renderPts(this.killPosX, this.killPosY);
    this.c.drawImage(this.fallDuckImage, 
      this.fallFrameIndex * 72 / 2, 0, 
      36, 36, 
      this.posX, this.posY, 
      70, 70
    );
  }

  renderSplat() {
    this.posY -= 3;
    this.c.drawImage(this.hitDuckImage, 
      0, 0, 36, 36, 
      this.posX, this.posY, 
      70, 70
    );
  }

  update() {
    this.randomizeDirCountMax();
    this.isTouchingEdge();
    this.repel();
    this.wrap();
    this.isFallFin();
    this.isFlyFin();
    this.isHit();
    this.isFlyAway();
    if (!this.hit) this.updateDir();
    this.updatePos();
    this.updateFly();
    this.isSplatFin();
    this.isInitialBoost();
  }
  
  updateFly() {
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      this.frameIndex++;
      this.fallFrameIndex++;
    }
    if (this.frameIndex > 2) this.frameIndex = 0;
    if (this.fallFrameIndex > 1) this.fallFrameIndex = 0;
  }
  
  updateDir() {
    this.dirCount++; 
    if (
      this.dirCount > this.dirCountMax &&
      this.direction !== "fall"
      ) {
        this.direction = this.changeDir();
        this.dirCount = 0;
    }
  }

  randomizeDirCountMax() {
    let n = Math.random();
    this.dirCountMax = n * 400;
  }

  updatePos() {
    if (this.direction === "escape") this.escape();
    if (this.direction === "fall") this.fallDown();
    if (this.direction === "left") this.left();
    if (this.direction === "right") this.right();
    if (this.direction === "top-left") this.topLeft();
    if (this.direction === "top-right") this.topRight();
    if (this.direction === "bot-left") this.bottomLeft();
    if (this.direction === "bot-right") this.bottomRight();
  }
  
  isTouchingEdge() {
    if (!this.falling) {
      if (this.posY > 335) this.touchingBottomEdge = true;
      if (this.posY < 0) this.touchingTopEdge = true;
    }
  }

  repel() {
    if (this.touchingTopEdge) {
      this.touchingTopEdge = false;
      this.posY += this.velY;
    }
    if (this.touchingBottomEdge) {
      this.touchingBottomEdge = false;
      this.posY -= this.velY;
    }
  }

  wrap() {
    if (this.posX < -35) this.posX = 477;
    if (this.posX > 477) this.posX = -35;
  }

  changeDir() {
    let num = Math.random();
    if ( num < 0.1667 ) {
      this.duckImage.src = "images/fly_left.png";
      return "left";
    }
    if ( num > 0.1667 && num < 0.3333 ) {
      this.duckImage.src = "images/fly_right.png";
      return "right";
    }
    if ( num > 0.3333 && num < 0.50 ) {
      this.duckImage.src = "images/fly_top_left.png";
      return "top-left";
    }
    if ( num > 0.50 && num < 0.667 ) {
      this.duckImage.src = "images/fly_top_right.png";
      return "top-right";
    }
    if ( num > 0.667 && num < 0.833 ) {
      this.duckImage.src = "images/fly_top_left.png";
      return "bot-left";
    }
    if ( num > 0.833 && num < 1 ) {
      this.duckImage.src = "images/fly_top_right.png";
      return "bot-right";
    }
  }

  left() {
    this.posX -= this.velX; 
  }

  right() { 
    this.posX += this.velX; 
  }

  escape() {
    this.posY -= 7; 
  }

  fallDown() { 
    this.posY += 3; 
  }

  topLeft() {
    this.posX -= this.velX;
    this.posY -= this.velY;
  }

  topRight() {
    this.posX += this.velX;
    this.posY -= this.velY;
  }

  bottomLeft() {
    this.posX -= this.velX;
    this.posY += this.velY;
  }

  bottomRight() {
    this.posX += this.velX;
    this.posY += this.velY;
  }

  isHit() {
    if (this.collision()) {
      this.killPosX = this.cross.clickPosX;
      this.killPosY = this.cross.clickPosY;
      this.cross.clickPosX = 1000;
      this.cross.clickPosY = 1000;
      this.hit = true;
      this.falling = true;

      this.duckImage.src = "";
      this.direction = "fall";
      return "fall";
    }
  }

  isFlyAway() {
    if (this.scoreboard.shots.count <= 0) {
      this.duckImage.src = "images/fly_up.png";
      this.direction = "escape";
      this.flyAway = true;
      return "escape";
    }
  }

  collision() {
    return (
      this.cross.clickPosX > this.posX + 6 && 
      this.cross.clickPosX < this.posX + 58 &&
      this.cross.clickPosY > this.posY + 6 &&
      this.cross.clickPosY < this.posY + 58
    );
  }

  isFallFin() {
    if (this.posY > 345) {
      this.fallFin = true;
    }
  }

  isFlyFin() {
    if (this.posY < -75) {
      this.flyFin = true;
    }
  }

  isSplatFin() {
    if (this.splatCount > 20) {
      this.splatFin = true;
    }
  }

  isInitialBoost() {
    if (this.initialBoostCount > 15) {
      this.initialBoost = false;
    }
  }
}

module.exports = Duck;