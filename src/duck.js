class Duck {
  constructor(c) {
    this.posX = 0;
    this.posY = 0;
    this.velX = 5;
    this.velY = 5;
    this.c = c;

    this.image = new Image();
    this.image.onload = () => {
      this.imageReady = true;
    };
    this.image.src = "../images/duckhunt_various_sheet.png";
    // window.draw = this.render.bind(this);
  }

  render() {
    if (!this.imageReady) return;
    this.c.drawImage(this.image, 0, 0);
    // window.draw = this.render.bind(this);
  }
  
  update() {
    
  }
}

module.exports = Duck;