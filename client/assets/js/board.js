'use strict';

import createCanvasGame from './createCanvasGame.js';
import Snake from './snake';
import Apple from './apple';

export default class Board {

// A snake store his position (x and y) and his score
	constructor() {
		this.snakes = [];
		this.context = createCanvasGame();
		this.apples = [];
	}

	newSnake(x, y){


		let snake = new Snake(this.context,x,y);
		snake.draw();
		this.snakes.push(snake);
	}

	newApple(x,y){
		let apple = new Apple(this.context,x,y);
		apple.draw();
		this.apples.push(apple);
	}

}
