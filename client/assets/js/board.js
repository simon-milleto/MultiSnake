'use strict';

import createCanvasGame from './createCanvasGame.js';
import Draw from './draw';

export default class Board {

// A snake store his position (x and y) and his score
  constructor() {
    this.snakes = [];
    this.context = createCanvasGame();
    this.apples = [];
  }

  newSnake(x, y){

    let draw = new Draw(this.context);

    let snake = draw.snake(this.context, x,y);

    this.snakes.push(snake);
  }

  newApple(x,y){
    let draw = new Draw(this.context);

    let apple = draw.apple(this.context, x,y);

    this.apples.push(apple);
  }

}
