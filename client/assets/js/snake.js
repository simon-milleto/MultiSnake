'use strict';

export default class Snake {

	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.direction ="right";
	}

	draw(context) {
		context.beginPath();
		context.rect(this.x, this.y, 50, 50);
		context.fillStyle = '#ffffff';
		context.fill();
		context.closePath();
	}

	move(){
		if(this.direction == 'right') {
			this.moveRight();
		}
		else if(this.direction == 'bottom') {
			this.moveBottom();
		}
		else if(this.direction == 'top') {
			this.moveTop();
		}
		else if(this.direction == 'left') {
			this.moveLeft();
		}
	}

}