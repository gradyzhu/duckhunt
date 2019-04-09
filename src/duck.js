class Duck {
  constructor(c, cross, roundCount, scoreboard) {
    this.c = c;
    this.cross = cross;
    this.scoreboard = scoreboard;
    // this.posX = Math.random() * 512;
    // this.posY = 200;
    this.posX = 442;
    this.posY = 0;
    this.velX = 0 * roundCount;
    this.velY = 0 * roundCount;
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

    this.hitDuckImage = new Image();
    this.hitDuckImage.onload = () => this.flyDuckImageReady = true;
    this.hitDuckImage.src = "images/fly_hit.png";
    
    this.hit = false;
    this.falling = false;
    this.fallFin = false;
    this.flyFin = false;

    this.touchingLeftEdge = false;
    this.touchingRightEdge = false;
    this.touchingTopEdge = false;
    this.touchingBottomEdge = false;
  }

  render() {
    this.c.fillStyle = 'purple';
    this.c.fillRect(442, 0, 70, 70);
    if (!this.duckImageReady) return;
    if (!this.fallDuckImageReady) return;

    this.renderFly();
    if (this.falling) {
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

  renderHit() {
    this.c.drawImage(this.hitDuckImage, 
      0, 0, 36, 36, 
      this.killPosX, this.killPosY, 
      70, 70
    );
  }
  
  update() {
    this.randomizeDirCountMax();
    this.isTouchingEdge();
    this.repel();
    this.isFallFin();
    this.isFlyFin();
    this.updateDir();
    this.updatePos();
    this.updateFly();

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
      if (this.posY > 300) this.touchingBottomEdge = true;
      if (this.posY < 0) this.touchingTopEdge = true;
      if (this.posX < 0) this.touchingLeftEdge = true;
      if (this.posX > 442) this.touchingRightEdge = true;
    }
  }

  repel() {
    if (this.touchingLeftEdge) {
      this.touchingLeftEdge = false;
      this.posX += this.velX; 
    }
    if (this.touchingRightEdge) {
      this.touchingRightEdge = false;
      this.posX -= this.velX;
    }
    if (this.touchingTopEdge) {
      this.touchingTopEdge = false;
      this.posY += this.velY;
    }
    if (this.touchingBottomEdge) {
      this.touchingBottomEdge = false;
      this.posY -= this.velY;
    }
  }

  changeDir() {
    if (this.collision()) {
      this.falling = true;
      this.killPosX = this.cross.clickPosX;
      this.killPosY = this.cross.clickPosY;

      this.duckImage.src = "";
      this.hit = true;
      this.direction = "fall";
      return "fall";
    }

    if (this.scoreboard.shots.count === 0) {
      this.duckImage.src = "images/fly_up.png";
      this.direction = "escape";
      return "escape";
    }

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

  collision() {
    return (
      this.cross.clickPosX > this.posX && 
      this.cross.clickPosX < this.posX + 35 &&
      this.cross.clickPosY > this.posY &&
      this.cross.clickPosY < this.posY + 35
    );
  }

  isFallFin() {
    if (this.posY > 325) {
      this.fallFin = true;
    }
  }

  isFlyFin() {
    if (this.posY < -75) {
      this.flyFin = true;
    }
  }
}

module.exports = Duck;