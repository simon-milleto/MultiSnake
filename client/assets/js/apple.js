'use strict';

import * as constant from './constant';

export default class Apple {

	constructor(context, x, y) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.radius = constant.APPLE_RADIUS;
	}

	draw() {
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this.context.fillStyle = constant.APPLE_COLOR;
		this.context.fill();
		this.context.closePath();
	}

	remove() {
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this.context.fillStyle = constant.BACKGROUND_COLOR;
		this.context.fill();
		this.context.closePath();
	}

}