'use strict';

import SnakePart from './snakePart';

const SNAKE_WIDTH = 25;
const SNAKE_HEIGHT = 25;
const BODY_PART_MARGIN = 5;

export default class Snake {

	constructor(context, x, y, color) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.score = 0;
        // TEMP: SET THE START DIRECTION TO RIGHT FOR TEST PURPOSES
		this.direction = 'right';
        // END TEMP
		this.color = color;
		this.width = SNAKE_WIDTH;
		this.height = SNAKE_HEIGHT;

		this.bodyParts = [];
	}

	draw() {
		this.addBodyPart();
	}

	addBodyPart() {
		let snakePart = new SnakePart(this.context, this.x, this.y, this.width, this.height, this.color);

		this.bodyParts.push(snakePart);
	}

	moveDown() {
		let lastBodyPart = this.bodyParts[this.bodyParts.length - 1];
		let firstBodyPart = this.bodyParts[0];

		lastBodyPart.remove();

		lastBodyPart.y = firstBodyPart.y + this.height + BODY_PART_MARGIN;
		lastBodyPart.x = firstBodyPart.x;
		lastBodyPart.draw();

		this.moveBodyPartsInArray();
	}

	moveUp() {
		let lastBodyPart = this.bodyParts[this.bodyParts.length - 1];
		let firstBodyPart = this.bodyParts[0];

		lastBodyPart.remove();

		lastBodyPart.y = firstBodyPart.y - this.height - BODY_PART_MARGIN;
		lastBodyPart.x = firstBodyPart.x;
		lastBodyPart.draw();

		this.moveBodyPartsInArray();
	}

	moveLeft() {
		let lastBodyPart = this.bodyParts[this.bodyParts.length - 1];
		let firstBodyPart = this.bodyParts[0];

		lastBodyPart.remove();

		lastBodyPart.y = firstBodyPart.y;
		lastBodyPart.x = firstBodyPart.x - this.width - BODY_PART_MARGIN;
		lastBodyPart.draw();

		this.moveBodyPartsInArray();
	}

	moveRight() {
		let lastBodyPart = this.bodyParts[this.bodyParts.length - 1];
		let firstBodyPart = this.bodyParts[0];

		lastBodyPart.remove();

		lastBodyPart.y = firstBodyPart.y;
		lastBodyPart.x = firstBodyPart.x + this.width + BODY_PART_MARGIN;
		lastBodyPart.draw();

		this.moveBodyPartsInArray();
	}

	addScore() {
		this.score += 1;
	}

	moveBodyPartsInArray() {
		this.bodyParts.splice(0, 0, this.bodyParts.splice(this.bodyParts.length - 1, 1)[0]);
	}

	move() {
		if (this.direction === 'right') {
			this.moveRight();
		}
		else if (this.direction === 'down') {
			this.moveDown();
		}
		else if (this.direction === 'up') {
			this.moveUp();
		}
		else if (this.direction === 'left') {
			this.moveLeft();
		}
	}

	checkCollisionWithApples(apples) {
		let firstBodyPart = this.bodyParts[0];

		apples.forEach((apple, index) => {
			if (firstBodyPart.x < apple.x + apple.radius * 2 &&
                firstBodyPart.x + firstBodyPart.width > apple.x &&
                firstBodyPart.y < apple.y + apple.radius * 2 &&
                firstBodyPart.height + firstBodyPart.y > apple.y) {

				apples.splice(index, 1);
				this.addScore();

				this.addBodyPart();

			}
		});
	}

}
