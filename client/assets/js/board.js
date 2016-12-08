'use strict';

import createCanvasGame from './createCanvasGame.js';
import Snake from './snake';
import Apple from './apple';
import $ from 'jquery';

const DELAY = 150;

export default class Board {

	constructor() {
		this.context = createCanvasGame();
		this.snakes = [];
		this.apples = [];
		this.color = [
			"#468966",
			"#fff1a8",
			"#FFB03B",
			"#B64926",
			"#f64804",
			"#3032cd",
			"#CD2C24",
			"#13ad00",
			"#51f1e0",
			"#F2385A"
		];
	}

	newSnake(x, y) {
        if(this.snakes.length < 10){
            let snake = new Snake(this.context, x, y, this.getAvailableColor());
            snake.draw();

            this.snakes.push(snake);
        } else {
            console.error('Error : only 10 snakes can be on the board');
        }
	}

	newApple(x, y) {
		let apple = new Apple(this.context, x, y);
		apple.draw();

		this.apples.push(apple);
	}

	getAvailableColor() {
		let snakeColor = this.snakes.map(function (snake) {
			return snake.color;
		});

		return this.color.find(function (c) {
			if (!snakeColor.includes(c)) {
				return c;
			}
		});
	}

	render(board) {
		setInterval(function () {
            // TEMP: ONLY START MOVING THE FIRST SNAKE FOR TEST PURPOSES
			board.snakes[0].move(this);
            // END TEMP

			board.checkSnakeWithAppleCollision();
		}, DELAY);

		$('body').keydown(function (e) {
			let snake = board.snakes[0];
			if (e.keyCode === 37 && snake.direction !== 'right') {
				snake.direction = 'left';
			}
			else if (e.keyCode === 38 && snake.direction !== 'down') {
				snake.direction = 'up';
			}
			else if (e.keyCode === 39 && snake.direction !== 'left') {
				snake.direction = 'right';
			}
			else if (e.keyCode === 40 && snake.direction !== 'up') {
				snake.direction = 'down';
			}
		});
	}

}
