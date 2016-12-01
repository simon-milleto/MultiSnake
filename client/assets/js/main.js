"use strict";

import Board from './board';
import createCanvasGame from './createCanvasGame.js';
import server from './sendToServer.js';

document.addEventListener('DOMContentLoaded', function() {
	

	let board = new Board();

	board.newSnake(50,50);
	// board.newSnake(300,300);
	board.newApple(500,350);
	board.newApple(900,50);
	board.newApple(800,550);
	board.newApple(1100,200);
	board.newApple(200,800);

	server.sendNewUser();
	server.sendDeleteUser();
	server.sendMove();

	createCanvasGame();
	board.render(board);

});
