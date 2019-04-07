class StartAni {
  constructor(c) {
    this.c = c;
    this.shockFin = false;
    this.jump1Fin = false;
    this.jump2Fin = false;

    this.sniffFrameIndex = 0;
    this.sniffTickCount = 0;
    this.sniffTicksPerFrame = 10;

    this.sniffImage = new Image();
    this.sniffImage.onload = () => this.sniffImageReady = true;
    this.sniffImage.src = "";

    this.walkFrameIndex = 0;
    this.walkTickCount = 0;
    this.walkTicksPerFrame = 6;

    this.walkImage = new Image();
    this.walkImage.onload = () => this.walkImageReady = true;
    this.walkImage.src = "/Users/grady/Desktop/duckhunt/images/dog_walk.png";

    this.shockImage = new Image();
    this.shockImage.onload = () => this.shockImageReady = true;
    this.shockImage.src = "/Users/grady/Desktop/duckhunt/images/dog_jump.png";

    this.jumpImage = new Image();
    this.jumpImage.onload = () => this.jumpImageReady = true;
    this.jumpImage.src = "/Users/grady/Desktop/duckhunt/images/dog_jump.png";

    this.jumpImage2 = new Image();
    this.jumpImage2.onload = () => this.jumpImage2Ready = true;
    this.jumpImage2.src = "/Users/grady/Desktop/duckhunt/images/dog_jump.png";
  }

  render() {

  }

  update() {

  }

  renderShock() {

  }

  renderJump1() {

  }

  renderJump2() {

  }

  isShockFin() {
    
  }

  isJumpStartFin() {

  }

  isJumpEndFin() {

  }
}