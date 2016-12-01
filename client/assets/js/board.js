'use strict';

import createCanvasGame from './createCanvasGame.js';
import Snake from './snake';
import Apple from './apple';
import $ from 'jquery';

const DELAY = 150;

export default class Board {

// A snake store his position (x and y) and his score
	constructor() {
		this.context = createCanvasGame();
		this.snakes = [];
		this.apples = [];
	}

	newSnake(x, y) {
		let snake = new Snake(this.context, x, y);
		snake.draw();

		// Temp : Simulate 4 bodyParts on the snake
		snake.addBodyPart(x - 60, y);
		snake.addBodyPart(x - 120, y);
		snake.addBodyPart(x - 180, y);
		// End Temp

		this.snakes.push(snake);
	}

	newApple(x, y) {
		let apple = new Apple(this.context, x, y);
		apple.draw();

		this.apples.push(apple);
	}

	render(board) {
		setInterval(function(){
			board.snakes[0].move();
		}, DELAY);

		$('body').keydown(function(e) {
			let snake = board.snakes[0];
			if(e.keyCode === 37 && snake.direction != 'left' && snake.direction != 'right') {
				snake.direction = 'left';
			}
			else if(e.keyCode === 38 && snake.direction != 'up' && snake.direction != 'down') {
				snake.direction = 'up';
			}
			else if(e.keyCode === 39 && snake.direction != 'right' && snake.direction != 'left') {
				snake.direction = 'right';
			}
			else if (e.keyCode === 40 && snake.direction != 'down' && snake.direction != 'up') {
				snake.direction = 'down';
			}
		});
	}

}
