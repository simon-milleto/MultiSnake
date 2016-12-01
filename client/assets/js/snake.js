'use strict';

export default class Snake {

	constructor(context, x, y, color) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.score = 0;
		this.color = color;
	}

	draw() {
		this.context.beginPath();
		this.context.rect(this.x, this.y, 50, 50);
		this.context.fillStyle = this.color;
		this.context.fill();
		this.context.closePath();
	}

	addScore(){
		this.score += 1;
	}

}
