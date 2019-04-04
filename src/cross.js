class Cross {
  constructor(c) {
    this.c = c;
    this.posX = 0;
    this.posY = 0;
    this.radius = 20;
    this.click = false;
    this.clickPosX = 0;
    this.clickPosY = 0;

    window.addEventListener('mousemove', event => {
      var bounds = this.c.canvas.getBoundingClientRect();
      this.posX = event.clientX - bounds.left;
      this.posY = event.clientY - bounds.top;
      this.update();
      console.log(`${this.posX}, ${this.posY}`);
    });

    window.addEventListener('click', () => {
      this.click = true;
      this.clickPosX = this.posX;
      this.clickPosY = this.posY;
    });
  }


  render() {
    this.c.beginPath();
    this.c.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    this.c.stroke();
    this.c.strokeStyle = "red";

    this.c.beginPath();
    this.c.fillStyle = "red";
    this.c.arc(this.posX, this.posY, 1, 0, 2 * Math.PI);
    this.c.fill();

    this.c.beginPath();
    this.c.moveTo(this.posX + 5, this.posY);
    this.c.lineTo(this.posX + 25, this.posY);
    this.c.moveTo(this.posX - 5, this.posY);
    this.c.lineTo(this.posX - 25, this.posY);

    this.c.moveTo(this.posX, this.posY + 5);
    this.c.lineTo(this.posX, this.posY + 25);
    this.c.moveTo(this.posX, this.posY - 5);
    this.c.lineTo(this.posX, this.posY - 25);
    this.c.stroke();
  }

  update() {
    this.c.clearRect(0, 0, this.c.canvas.width, this.c.canvas.height);
    // this.render();
  }

}

module.exports = Cross;