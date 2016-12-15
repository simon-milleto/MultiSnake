"use strict";

module.exports = function generateApple(board, applesOnBoard, nbr) {
	var i = 0;

	while (i <= nbr) {
		var x = Math.floor(Math.random() * 1500) + 1;
		var y = Math.floor(Math.random() * 900) + 1;
		var apple = board.newApple(x,y);
		applesOnBoard.push(apple);
		i++;
	}

	return applesOnBoard;
}
