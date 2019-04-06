class GameOverScreen {
  constructor(c) {
    this.c = c;
  }

  render() {
    this.c.fillRect(0, 0, 100, 100);
    this.c.fillStyle = 'green';
  }
}

module.exports = GameOverScreen;