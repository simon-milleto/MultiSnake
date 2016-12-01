'use strict';

import Snake from './snake';
import Apple from './apple';

export default class Draw {

	constructor(context) {
		this.context = context;
	}

	snake(x,y) {
		let snake = new Snake(this.context, x, y);
		snake.draw();

		return snake;
	}

	apple(x,y) {
		let apple = new Apple(this.context, x, y);
		apple.draw();

		return apple;
	}

}
