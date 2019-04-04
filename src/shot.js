class Shots {
  constructor() {
    this.shots = [0, 0, 0];
    this.shotImage = this.image = new Image();
    this.shotImage.onload = () => {
      this.imageReady = true;
    };
    this.hitDuckImage.src = "/Users/grady/Desktop/duckhunt/images/shot.png";
  }

  render() {
    this.c.drawImage(this.shotImage,
      0, 0,
      25, 25,
      200 + (i+1)*19, 250,
      20, 20
    );
  }

  update() {

  }
}

module.exports = Shots;