"use strict";

var $ = require("jquery");
import Board from './board';
import Draw from './draw';

const DELAY = 500;

document.addEventListener('DOMContentLoaded', function () {

	let board = new Board(1600, 900);

	let draw = new Draw(board.context);

	setInterval(function(){
		snake.move()
	}, DELAY);

	$('body').keydown(function(e) {
		if(e.keyCode == 37) {
			draw.snake.direction = 'left';
		}
		else if(e.keyCode == 38) {
			draw.snake.direction = 'top';
		}
		else if(e.keyCode == 39) {
			draw.snake.direction = 'right';
		}
		else if (e.keyCode == 40) {
			draw.snake.direction = 'bottom';
		}
	});

});
