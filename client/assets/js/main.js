'use strict';

import Board from './board';
import server from './sendToServer.js';
import * as constant from './constant';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function () {

    server.on('connection', function(){

        $('form.username').submit(function(e) {
            e.preventDefault();
            var name = $(this).find('input.username')[0].value;

            $(this).remove();

            let board = new Board();

			/* Random place on board for testing purpose */
			let long = Math.floor(Math.random() * (constant.CANVAS_WIDTH/30)) * 30;
			let lat = Math.floor(Math.random() * (constant.CANVAS_HEIGHT/30)) * 30;
			board.newSnake(long, lat, name);

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
    });

    server.on('disconnection', function(){
        // Destroy Snake
    });

});
