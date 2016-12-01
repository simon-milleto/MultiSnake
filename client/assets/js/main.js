'use strict';

import createCanvasGame from './createCanvasGame.js';
import $ from 'jquery';
import Draw from './draw';

const SPEED = 500;

document.addEventListener('DOMContentLoaded', function () {

	let context = createCanvasGame();

	let draw = new Draw(context);

	let snake = draw.snake();

	setInterval(function(){
		snake.move()
	}, SPEED);


	$('body').keydown(function(e) {
		if(e.keyCode == 37) {
			snake.direction = 'left';
		}
		else if(e.keyCode == 38) {
			snake.direction = 'top';
		}
		else if(e.keyCode == 39) {
			snake.direction = 'right';
		}
		else if (e.keyCode == 40) {
			snake.direction = 'bottom';
		}
	});

});
