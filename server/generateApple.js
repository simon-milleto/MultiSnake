"use strict";

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

module.exports = function generateApple(board, applesOnBoard, nbr) {
	var i = 0;

	while (i <= nbr) {
		var x = Math.floor(Math.random() * (1200/30)) * 30 + 15;
		var y = Math.floor(Math.random() * (690/30)) * 30 + 15;
		var apple = board.newApple(x,y);
		io.emit('new apple', {x: x, y: y});
		applesOnBoard.push(apple);
		i++;
	}

	return applesOnBoard;
}
