class Mouse {
  constructor(dc) {
    this.dc = dc;
    this.posX = 0;
    this.posY = 0;
    this.draw();
    this.update();
  }


  draw() {
    this.dc.beginPath();
    this.dc.arc(100, 75,50, 0, 2 * Math.PI);
    this.dc.stroke();
  }

  update() {
    this.dc.canvas.addEventListener('mousemove', event => {
      var bounds = canvas.getBoundingClientRect();
      let pos = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top
      };
      this.posX = pos.x;
      this.posY = pos.y;
      this.draw();
      console.log(`${this.posX}, ${this.posY}`);
    });
  }
}

module.exports = Mouse;