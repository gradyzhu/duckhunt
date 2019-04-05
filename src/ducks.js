class Ducks {
  constructor(c) {
    this.c = c;
    this.arr = [0,1,0,0,0,1,0,0,0,0];

    this.duckImage = new Image();
    this.duckImage.onload = () => this.duckImageReady = true;
    this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/missed_duck.png";

    this.hitDuckImage = new Image();
    this.hitDuckImage.onload = () => this.hitDuckImageReady = true;
    this.hitDuckImage.src = "/Users/grady/Desktop/duckhunt/images/hit_duck.png";
  }
  
  render() {
    if (!this.duckImageReady) return;
    if (!this.hitDuckImageReady) return;

    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === 0) {
        this.c.drawImage(this.duckImage,
          0, 0,
          25, 25,
          200 + (i+1)*19, 200,
          20, 20
        );
      }
      if (this.arr[i] === 1) {
        this.c.drawImage(this.hitDuckImage,
          0, 0,
          25, 25,
          200 + (i+1)*19, 200,
          20, 20
        );
      }
    }
  }

  update() {
    
  }
}

module.exports = Ducks;