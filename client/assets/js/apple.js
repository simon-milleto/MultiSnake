'use strict';

export default class Apple {
    
	constructor(context, x, y) {
		this.context = context;
		this.x = x;
		this.y = y;
	}
    
	draw() {
		this.context.beginPath();
		this.context.arc(this.x, this.y, 10, 0, 2*Math.PI);
		this.context.fillStyle = "#90EE90";
		this.context.fill();
		this.context.closePath();
	}
    
}