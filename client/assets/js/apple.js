'use strict';

const BACKGROUND_COLOR = '#000000';
const APPLE_COLOR = '#e93c4f';
const APPLE_RADIUS = 5;

export default class Apple {

	constructor(context, x, y) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.radius = APPLE_RADIUS;
	}

	draw() {
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this.context.fillStyle = APPLE_COLOR;
		this.context.fill();
		this.context.closePath();
	}

	remove() {
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this.context.fillStyle = BACKGROUND_COLOR;
		this.context.fill();
		this.context.closePath();
	}

}