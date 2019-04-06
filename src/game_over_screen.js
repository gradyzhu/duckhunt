class GameOverScreen {
  constructor(c) {
    this.c = c;
  }

  render() {
    this.c.fillText("GAME OVER", 200, 0); 
    this.c.fillStyle = 'black';
    this.c.fillRect(132, 100, 250, 100);

    this.c.font = "20.5px Pixel Emulator";
    this.c.fillStyle = "white";
    this.c.textAlign = "center"; 
    this.c.fillText('game over', 256, 142);
    this.c.fillText('play again', 256, 170);
  }
}

module.exports = GameOverScreen;