class Duck {
  constructor(c, cross, roundCount, scoreboard) {
    this.c = c;
    this.cross = cross;
    this.scoreboard = scoreboard;
    this.posX = Math.random() * 512;
    this.posY = 200;
    this.velX = 1 * roundCount;
    this.velY = 1 * roundCount;
    this.roundCount = roundCount;
    
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 4;
    this.dirCount = 0;
    
    this.duckImage = new Image();
    this.duckImage.onload = () => this.duckImageReady = true;
    this.duckImage.src = "";
    this.direction = this.changeDir();
    
    this.hit = false;
    this.fallFin = false;
    this.flyFin = false;
  }

  render() {
    if (!this.duckImageReady) return;
    this.c.drawImage(
      this.duckImage, 
      this.frameIndex * 120 / 3, 0, 
      40, 40, 
      this.posX, this.posY, 
      70, 70
    );
  }

  update() {
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
    }
    if (this.frameIndex > 2) {
      this.frameIndex = 0;
    }
  }
  
  updateDir() {
    this.dirCount++; 
    if (
      this.dirCount > 10 &&
      this.direction !== "fall"
      ) {
        this.direction = this.changeDir();
        this.dirCount = 0;
    }
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
  
  changeDir() {
    if (this.collision()) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fall_down.png";
      this.hit = true;
      this.direction = "fall";
      return "fall";
    }

    if (this.scoreboard.shots.count === 0) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_up.png";
      this.direction = "escape";
      return "escape";
    }

    let num = Math.random();
    if ( num < 0.1667 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_left.png";
      return "left";
    }
    if ( num > 0.1667 && num < 0.3333 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_right.png";
      return "right";
    }
    if ( num > 0.3333 && num < 0.50 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_top_left.png";
      return "top-left";
    }
    if ( num > 0.50 && num < 0.667 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_top_right.png";
      return "top-right";
    }
    if ( num > 0.667 && num < 0.833 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_top_left.png";
      return "bot-left";
    }
    if ( num > 0.833 && num < 1 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_top_right.png";
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
      this.cross.clickPosX < this.posX + 40 &&
      this.cross.clickPosY > this.posY &&
      this.cross.clickPosY < this.posY + 40
    );
  }

  isFallFin() {
    if (this.posY > 300) {
      this.fallFin = true;
      console.log(this.fallFin);
    }
  }

  isFlyFin() {
    if (this.posY < -40) {
      this.flyFin = true;
      // console.log(this.flyFin);
    }
  }
}

module.exports = Duck;