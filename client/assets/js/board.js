'use strict';

import createCanvasGame from './createCanvasGame.js';
import Snake from './snake';
import Apple from './apple';

const DELAY = 500;

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

	render(board) {
		setInterval(function(){
			board.snakes[0].move()
		}, DELAY);

		$('body').keydown(function(e) {
			if(e.keyCode == 37) {
				board.snakes[0].direction = 'left';
			}
			else if(e.keyCode == 38) {
				board.snakes[0].direction = 'top';
			}
			else if(e.keyCode == 39) {
				board.snakes[0].direction = 'right';
			}
			else if (e.keyCode == 40) {
				board.snakes[0].direction = 'bottom';
			}
		});
	}

}
