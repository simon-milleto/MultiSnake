'use strict';

import Board from './board';
import server from './sendToServer.js';

document.addEventListener('DOMContentLoaded', function () {

	let board = new Board();


    // TEMP: CREATE TWO SNAKES FOR TEST PURPOSES
	board.newSnake(0, 60, 'Jean-Mich');
	board.newSnake(420, 330, 'Xx-JeanKevin33-xX');
    // END TEMP

    server.on('connection', function(){
    	/* Random place on board for testing purpose */
    	let long = Math.floor(Math.random() * 1000);
    	let lat = Math.floor(Math.random() * 500);
    	board.newSnake(long, lat);
    });

    server.on('disconnection', function(){
    	// Destroy Snake
    });

    // TEMP: CREATE SEVEN APPLES FOR TEST PURPOSES
	board.newApple(765, 315);
	board.newApple(1155, 75);
	board.newApple(495, 615);
	board.newApple(1035, 495);
	board.newApple(135, 285);
	board.newApple(1005, 795);
	board.newApple(105, 855);
    // END TEMP

	server.sendNewUser();
	server.sendDeleteUser();
	server.sendMove();

	board.render();

});
