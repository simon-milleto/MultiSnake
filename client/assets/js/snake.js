'use strict';

export default class Snake {

	constructor(context, x, y) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.score = 0;

	}

	draw() {
		this.context.beginPath();
		this.context.rect(this.x, this.y, 50, 50);
		this.context.fillStyle = '#ffffff';
		this.context.fill();
		this.context.closePath();
	}

	addScore(){
		this.score += 1;
	}

}
