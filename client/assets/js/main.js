'use strict';

import createCanvasGame from './createCanvasGame.js';
import server from './sendToServer.js';

document.addEventListener('DOMContentLoaded', function() {
	var socket = io();

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
	

});
