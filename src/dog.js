const StartAni = require("./start_ani.js");

class Dog {
  constructor(c) {
    this.c = c;
    this.startAni = new StartAni(this.c);
  }

  renderStartAni() {
    this.startAni.render();
  }

  update() {
    this.startAni.update();
  }
}

module.exports = Dog;