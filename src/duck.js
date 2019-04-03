class Duck {
  constructor(c) {
    this.c = c;
    this.posX = 200;
    this.posY = 200;
    this.velX = 3;
    this.velY = 3;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 4;
    this.dirCount = 0;
    
    this.image = new Image();
    this.image.onload = () => {
      this.imageReady = true;
    };
    this.image.src = "";
    this.direction = this.changeDir();
    // window.draw = this.render.bind(this);
  }

  render() {
    if (!this.imageReady) return;
    this.c.drawImage(
      this.image, 
      this.frameIndex * 120 / 3, 
      0, 
      40, 
      40, 
      this.posX, 
      this.posY, 
      70, 
      70);
    // this.c.drawImage(img, sx, sy, swidth, sheight, dx, dy, dwidth, dheight);
    // window.draw = this.render.bind(this);
  }

  update() {
    this.dirCount++; 
    if (this.dirCount > 10) {
      this.direction = this.changeDir();
      this.dirCount = 0;
    }
    if (this.direction === "left") this.left();
    if (this.direction === "right") this.right();
    if (this.direction === "top-left") this.topLeft();
    if (this.direction === "top-right") this.topRight();
    if (this.direction === "bot-left") this.bottomLeft();
    if (this.direction === "bot-right") this.bottomRight();
      
    
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      this.frameIndex++;
    }

    if (this.frameIndex > 2) {
      this.frameIndex = 0;
    }
    // console.log(this.frameIndex);
  }

  changeDir() {
    let num = Math.random();
    if ( num < 0.1667 ) {
      this.image.src = "/Users/grady/Desktop/duckhunt/images/fly_left.png";
      return "left";
    }
    if ( num > 0.1667 && num < 0.3333 ) {
      this.image.src = "/Users/grady/Desktop/duckhunt/images/fly_right.png";
      return "right";
    }
    if ( num > 0.3333 && num < 0.50 ) {
      this.image.src = "/Users/grady/Desktop/duckhunt/images/fly_top_left.png";
      return "top-left";
    }
    if ( num > 0.50 && num < 0.667 ) {
      this.image.src = "/Users/grady/Desktop/duckhunt/images/fly_top_right.png";
      return "top-right";
    }
    if ( num > 0.667 && num < 0.833 ) {
      this.image.src = "/Users/grady/Desktop/duckhunt/images/fly_top_left.png";
      return "bot-left";
    }
    if ( num > 0.833 && num < 1 ) {
      this.image.src = "/Users/grady/Desktop/duckhunt/images/fly_top_right.png";
      return "bot-right";
    }
  }

  left() {
    this.posX -= this.velX;
  }

  right() {
    this.posX += this.velX;
  }

  topLeft() {
    this.posX -= this.velX;
    this.posY += this.velY;
  }
  topRight() {
    // this.image.src = "/Users/grady/Desktop/duckhunt/images/fly_diagonal.png";
    this.posX += this.velX;
    this.posY += this.velY;
  }
  bottomLeft() {
    // this.image.src = "/Users/grady/Desktop/duckhunt/images/fly_diagonal.png";
    this.posX -= this.velX;
    this.posY -= this.velY;
  }
  bottomRight() {
    // this.image.src = "/Users/grady/Desktop/duckhunt/images/fly_diagonal.png";
    this.posX += this.velX;
    this.posY -= this.velY;
  }

  flyAway() {

  }
  fallDown() {

  }
}

module.exports = Duck;