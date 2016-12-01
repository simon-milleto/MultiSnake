'use strict';

const APPLECOLOR = "#90EE90";
const APPLERADIUS = 10;

export default class Apple {
    
	constructor(context, x, y) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.radius = APPLERADIUS;
	}
    
	draw() {
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		this.context.fillStyle = APPLECOLOR;
		this.context.fill();
		this.context.closePath();
	}
    
}