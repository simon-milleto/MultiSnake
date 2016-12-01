'use strict';

export default class Snake {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.score = 0;

    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, 50, 50);
        context.fillStyle = '#ffffff';
        context.fill();
        context.closePath();
    }

    addScore(){
      this.score += 1;
    }

}
