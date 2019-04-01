class Mouse {
  constructor(c) {
    this.c = c;
    this.posX = 0;
    this.posY = 0;
  }

  pos() {
    this.c.canvas.addEventListener('mousemove', event => {
        var bounds = canvas.getBoundingClientRect();
        let pos = {
          x: event.clientX - bounds.left,
          y: event.clientY - bounds.top
        };
        this.posX = pos.x;
        this.posY = pos.y;
        console.log(`${this.posX}, ${this.posY}`);
    });
  }
}

module.exports = Mouse;