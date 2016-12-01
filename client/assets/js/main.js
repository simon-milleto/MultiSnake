"use strict";

import $ from 'jquery';
import Board from './board';

document.addEventListener('DOMContentLoaded', function () {

	let board = new Board();

	board.newSnake(50,50);
	board.newSnake(300,300);
	board.newApple(500,350);

	board.render(board);

});

Array.prototype.move = function (old_index, new_index) {
	if (new_index >= this.length) {
		var k = new_index - this.length;
		while ((k--) + 1) {
			this.push(undefined);
		}
	}
	this.splice(new_index, 0, this.splice(old_index, 1)[0]);
};
