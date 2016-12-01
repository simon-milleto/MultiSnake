"use strict";

import Board from './board';
import createCanvasGame from './createCanvasGame.js';
import server from './sendToServer.js';

document.addEventListener('DOMContentLoaded', function() {
	

	let board = new Board();

	board.newSnake(50,50);
	board.newSnake(300,300);
	board.newApple(500,350);

	server.sendNewUser();
	server.sendDeleteUser();
	server.sendMove();

	createCanvasGame();

});
