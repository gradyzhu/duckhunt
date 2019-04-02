class Cross {
  constructor(dc) {
    this.dc = dc;
    this.posX = 0;
    this.posY = 0;
    this.click = false;
    // this.draw();
    window.addEventListener('mousemove', event => {
      var bounds = this.dc.canvas.getBoundingClientRect();
      this.posX = event.clientX - bounds.left;
      this.posY = event.clientY - bounds.top;
      this.update();
      console.log(`${this.posX}, ${this.posY}`);
    });

    window.addEventListener('click', event => {
      this.click = true;
      console.log('BOOM');
    });
  }


  draw() {
    this.dc.beginPath();
    this.dc.arc(this.posX, this.posY, 20, 0, 2 * Math.PI);
    this.dc.stroke();
  }

  update() {
    this.dc.clearRect(0, 0, this.dc.canvas.width, this.dc.canvas.height);
    this.draw();
  }

  // update() {
  //   this.dc.canvas.addEventListener('mousemove', event => {
  //     var bounds = canvas.getBoundingClientRect();
  //     // let pos = {
  //       //   x: event.clientX - bounds.left,
  //       //   y: event.clientY - bounds.top
  //       // };
  //     this.posX = event.clientX - bounds.left;
  //     this.posY =  event.clientY - bounds.top;
  //     this.draw();
  //     console.log(`${this.posX}, ${this.posY}`);
  //   });
}

module.exports = Cross;