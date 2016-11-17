'use strict';

export default class Snake {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, 50, 50);
        context.fillStyle = '#ffffff';
        context.fill();
        context.closePath();
    }

}