'use strict';

import Board from './board';
import server from './sendToServer.js';
import createCanvasGame from './createCanvasGame.js';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function () {

	server.on('connection', function(){


	$('form.username').submit(function(e) {
		e.preventDefault();
		var name = $(this).find('input.username')[0].value;

		$(this).remove();

        let context = createCanvasGame();
        let board = new Board(context);

        /* Random place on board for testing purpose */
			let long = Math.floor(Math.random() * 1000);
			let lat = Math.floor(Math.random() * 500);
			board.newSnake(long, lat);

		server.on('new_apple', function(data){

			let apple = board.newApple(data.x, data.y);
			apple.draw();
		});


			server.sendNewUser();
			server.sendDeleteUser();
			server.sendMove();

			board.render();
		});
	});

	server.on('disconnection', function(){
		// Destroy Snake
	});

});
