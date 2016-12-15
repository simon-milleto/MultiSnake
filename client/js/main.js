'use strict';

import Board from './board';
import server from './sendToServer.js';
import createCanvasGame from './createCanvasGame.js';
import * as constant from './constant';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function () {

	server.on('connection', function(){

		$('form.username').submit(function(e) {
			e.preventDefault();
			var name = $(this).find('input.username')[0].value;

			$('div.username').remove();

			let context = createCanvasGame();
			let board = new Board(context);
			board.createScoreboard();

			/* Random place on board for testing purpose */
			let long = Math.floor(Math.random() * (constant.CANVAS_WIDTH/constant.GRID_SIZE)) * constant.GRID_SIZE;
			let lat = Math.floor(Math.random() * (constant.CANVAS_HEIGHT/constant.GRID_SIZE)) * constant.GRID_SIZE;
			let snake = board.newSnake(long, lat, name);

			server.on('new_apple', function(data){
				let apple = board.newApple(data.x, data.y);
				apple.draw();
			});

			server.on('setDirection', data => {
				board.snakes.forEach(snake => {
					if (snake.x === data.snake.x && snake.y === data.snake.y) {
						snake.changeDirecion(data.direction);
					}
				});
			});

			server.sendNewUser();
			server.sendDeleteUser();
			server.sendMove();

			board.render();

			$('body').keydown((e) => {
				if (e.keyCode === 37 && snake.direction !== 'right') {
					server.changeDirection(snake, 'left');
				}
				else if (e.keyCode === 38 && snake.direction !== 'down') {
					server.changeDirection(snake, 'up');
				}
				else if (e.keyCode === 39 && snake.direction !== 'left') {
					server.changeDirection(snake, 'right');
				}
				else if (e.keyCode === 40 && snake.direction !== 'up') {
					server.changeDirection(snake, 'down');
				}
			});
		});
	});

	server.on('disconnection', function(){
        // Destroy Snake
	});

});
