'use strict';

import Canvas from './canvas.js';
import Draw from './draw';

export default class Board {

  constructor() {
    let canvas = new Canvas();
    this.snakes = [];
    this.context = canvas.draw();
    this.apples = [];
  }

  newPlayer(x, y){

    let draw = new Draw(this.context);

    let snake = draw.snake(x,y);

    this.snakes.push(snake);
  }

}
