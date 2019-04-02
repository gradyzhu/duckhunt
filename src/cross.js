class Cross {
  constructor(c) {
    this.c = c;
    this.posX = 0;
    this.posY = 0;
    this.click = false;

    window.addEventListener('mousemove', event => {
      var bounds = this.c.canvas.getBoundingClientRect();
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


  render() {
    this.c.beginPath();
    this.c.arc(this.posX, this.posY, 20, 0, 2 * Math.PI);
    this.c.stroke();
    this.c.strokeStyle = "red";
    this.c.beginPath();
    this.c.arc(this.posX, this.posY, 2, 0, 2 * Math.PI);
    this.c.fill();
    this.c.fillStyle = "red";
  }

  update() {
    this.c.clearRect(0, 0, this.c.canvas.width, this.c.canvas.height);
    // this.render();
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