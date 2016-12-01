'use strict';

import SnakePart from './snakePart';

export default class Snake {

	constructor(context, x, y) {
		this.context = context;
		this.x = x;
		this.y = y;
        this.score = 0;
		this.direction ="right";

		this.bodyParts = [];
	}

	draw() {
		this.addBodyPart(this.x, this.y);
	}

	addBodyPart(x, y) {
		let snakePart = new SnakePart(this.context, x, y);
		snakePart.draw();

		this.bodyParts.push(snakePart);
	}

	moveDown() {
		let lastBodyPart = this.bodyParts[this.bodyParts.length - 1];
		let firstBodyPart = this.bodyParts[0];

		lastBodyPart.remove();

		lastBodyPart.y = firstBodyPart.y + 60;
		lastBodyPart.x = firstBodyPart.x;
		lastBodyPart.draw();

		this.bodyParts.move(this.bodyParts.length - 1, 0);
	}

	moveUp() {
		let lastBodyPart = this.bodyParts[this.bodyParts.length - 1];
		let firstBodyPart = this.bodyParts[0];

		lastBodyPart.remove();

		lastBodyPart.y = firstBodyPart.y - 60;
		lastBodyPart.x = firstBodyPart.x;
		lastBodyPart.draw();

		this.bodyParts.move(this.bodyParts.length - 1, 0);
	}

	moveLeft() {
		let lastBodyPart = this.bodyParts[this.bodyParts.length - 1];
		let firstBodyPart = this.bodyParts[0];

		lastBodyPart.remove();

		lastBodyPart.y = firstBodyPart.y;
		lastBodyPart.x = firstBodyPart.x - 60;
		lastBodyPart.draw();

		this.bodyParts.move(this.bodyParts.length - 1, 0);
	}

	moveRight() {
		let lastBodyPart = this.bodyParts[this.bodyParts.length - 1];
		let firstBodyPart = this.bodyParts[0];

		lastBodyPart.remove();

		lastBodyPart.y = firstBodyPart.y;
		lastBodyPart.x = firstBodyPart.x + 60;
		lastBodyPart.draw();

		this.bodyParts.move(this.bodyParts.length - 1, 0);
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
