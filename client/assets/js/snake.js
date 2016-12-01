'use strict';

export default class Snake {

	constructor(context, x, y) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.score = 0;
		this.direction ="right";
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

	move(){
		if(this.direction === 'right') {
			this.moveRight();
		}
		else if(this.direction === 'bottom') {
			this.moveBottom();
		}
		else if(this.direction === 'top') {
			this.moveTop();
		}
		else if(this.direction === 'left') {
			this.moveLeft();
		}
	}

}
