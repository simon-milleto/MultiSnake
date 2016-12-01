"use strict";

<<<<<<< HEAD
import Board from './board';
=======
import createCanvasGame from './createCanvasGame.js';
import server from './sendToServer.js';
>>>>>>> server

document.addEventListener('DOMContentLoaded', function() {
	var socket = io();

<<<<<<< HEAD
	let board = new Board();

	board.newSnake(50,50);
	board.newSnake(300,300);
	board.newApple(500,350);
=======
	server.sendNewUser(socket);
	server.sendDeleteUser(socket);
	server.sendMove(socket);

	socket.on('start', function(e){
		console.log(e);
	});
	socket.on('end', function(e){
		console.log(e);
	});

	createCanvasGame();
	
>>>>>>> server

});
