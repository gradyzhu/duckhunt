class Duck {
  constructor(c) {
    this.c = c;
    this.posX = 200;
    this.posY = 200;
    this.velX = 0;
    this.velY = 0;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 6;

    this.image = new Image();
    this.image.onload = () => {
      this.imageReady = true;
    };
    this.image.src = "../images/fly_left.png";
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
    let direction = this.flightDir();
    if (direction === "left") this.left();
    if (direction === "right") this.right();
    if (direction === "top-left") this.topLeft();
    if (direction === "top-right") this.topRight();
    if (direction === "bot-left") this.bottomLeft();
    if (direction === "bot-right") this.bottomRight();
  
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

  flightDir() {
    let num = Math.random();
    if ( num < 0.1667 ) return "left";
    if ( num > 0.1667 && num < 0.3333 ) return "right";
    if ( num > 0.3333 && num < 0.50 ) return "top-left";
    if ( num < 0.50 && num < 0.667 ) return "top-right";
    if ( num < 0.667 && num < 0.833 ) return "bot-right";
    if ( num < 0.833 && num < 1 ) return "bot-right";
  }

  left() {
    this.posX += this.velX;
  }

  right() {
    this.posX -= this.velX;
  }
  topLeft() {
    this.posX -= this.velX;
    this.posY += this.velY;
  }
  topRight() {
    this.posX += this.velX;
    this.posY += this.velY;
  }
  bottomLeft() {
    this.posX -= this.velX;
    this.posY -= this.velY;
  }
  bottomRight() {
    this.posX += this.velX;
    this.posY -= this.velY;
  }
  flyAway() {

  }
  fallDown() {

  }
}

module.exports = Duck;