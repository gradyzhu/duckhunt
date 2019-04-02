class Duck {
  constructor(dc) {
    this.posX = 0;
    this.posY = 0;
    this.velX = 5;
    this.velY = 5;
    this.dc = dc;
    this.image = new Image();
    this.image.onload = () => {
      this.imageReady = true;
    };
    this.image.src = "../images/duckhunt_various_sheet.png";
    window.draw = this.draw.bind(this);
  }

  draw() {
    if (!this.imageReady) return;
    console.log(this.image);
    console.log(this.image.src);
    console.log(this.dc);
    this.dc.drawImage(this.image, 0, 0);
    this.dc.fillStyle = "green";
    this.dc.fillRect(10, 10, 30, 30);
    // this.dc.drawImage(this.image, 0, 0, 50, 50, 0, 0, 0, 0);
  }

  move() {
    
  }
}

module.exports = Duck;