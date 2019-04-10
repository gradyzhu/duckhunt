class Environment {
  constructor(c) {
    this.c = c;
    this.image = new Image();
    this.image.onload = () => this.imageReady = true;
    this.image.src = "images/duckhunt-static-1.png";
  }

  render() {
    if (!this.imageReady) return;
    this.c.drawImage(this.image, 0, 0);
  }
}

module.exports = Environment; 