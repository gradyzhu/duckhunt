### [Live Demo](https://gradyzhu.github.io/duckhunt/)

## Overview

A remake of the popular 1984 shooter game DuckHunt.  The objective of the game is to shoot ducks and accrue as many points as possible.

Ducks appear one at a time and the player is granted 3 shots to shoot down the duck. The player must shoot 6+ ducks to advance to the next round.  Failure to do so will result in a game over.  With each subsequent round, ducks will increase in speed and be worth more points when shot.


## Technologies

* HTML5 Canvas, CSS
* Javascript (ES6)

## Features

### Collision Detection

### Sprite Animations

I quickly realized that determining the precise X and Y dimensions on a spritesheet with unique graphics would be an absurd task that would yield inprecise results.  Implementing pixel perfect sprite animations required a bit of finagling.  Using photoshop, I exported sprite animation's frames in separate .png files to make my life a little easier.  

![fly_right](images/fly_right.png)
![fly_right](images/fly_hit.png)
![fly_right](images/fall_down.png)
![dog_walk](images/dog_walk.png)
![dog_walk](images/dog_sniff.png)
![dog_walk](images/dog_jump.png)

### Scoring System

### Round Logic

### Wave Logic

## Flight Algorithm



```javascript
  // duck.js

  changeDir() {
    let num = Math.random();
    if ( num < 0.1667 ) {
      this.duckImage.src = "images/fly_left.png";
      return "left";
    }
    if ( num > 0.1667 && num < 0.3333 ) {
      this.duckImage.src = "images/fly_right.png";
      return "right";
    }
    if ( num > 0.3333 && num < 0.50 ) {
      this.duckImage.src = "images/fly_top_left.png";
      return "top-left";
    }
    if ( num > 0.50 && num < 0.667 ) {
      this.duckImage.src = "images/fly_top_right.png";
      return "top-right";
    }
    if ( num > 0.667 && num < 0.833 ) {
      this.duckImage.src = "images/fly_top_left.png";
      return "bot-left";
    }
    if ( num > 0.833 && num < 1 ) {
      this.duckImage.src = "images/fly_top_right.png";
      return "bot-right";
    }
  }
```

## Future Features

* Highscore board
* Game sounds / music
  * Mute button
* Game start button
* Restart button

