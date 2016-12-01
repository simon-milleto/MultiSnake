const BACKGROUNDCOLOR = '#000000';

export default class SnakePart {

	constructor(context, x, y, width, height, color) {
		this.context = context;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		this.context.beginPath();
		this.context.rect(this.x, this.y, this.width, this.height);
		this.context.fillStyle = this.color;
		this.context.fill();
		this.context.closePath();
	}

	remove() {
		this.context.beginPath();
		this.context.rect(this.x, this.y, this.width, this.height);
		this.context.fillStyle = BACKGROUNDCOLOR;
		this.context.fill();
		this.context.closePath();
	}

}