// class Shots {
//   constructor(c) {
//     this.c = c;
//     this.arr = [0, 0, 0];

//     this.count = this.arr.filter(el => el === 0).length;

//     this.shotImage = this.image = new Image();
//     this.shotImage.onload = () => {
//       this.imageReady = true;
//     };

//     this.shotImage.src = "/Users/grady/Desktop/duckhunt/images/shot.png";
//   }

//   render() {
//     for (let i = 0; i < this.arr.length; i++) {
//       if (this.arr[i] === 0) {
//         this.c.drawImage(this.shotImage,
//           0, 0,
//           25, 25,
//           200 + (i+1)*19, 250,
//           20, 20
//         );
//       } else {
//         this.c.fillRect(0, 0, 25, 25);
//       }
//     }
//   }

//   update() {

//   }
// }

// module.exports = Shots;

class Shots {
  constructor(c) {
    this.c = c;
    this.count = 3;

    this.shotImage = new Image();
    this.shotImage.onload = () => this.imageReady = true;
    this.shotImage.src = "/Users/grady/Desktop/duckhunt/images/shot.png";
  }

  render() {
    for (let i = 0; i < this.count; i++) {
      this.c.drawImage(this.shotImage,
        0, 0,
        25, 25,
        31 + (i+1)*16, 411,
        19, 19
      );
    }
  }

  update() {

  }
}

module.exports = Shots;