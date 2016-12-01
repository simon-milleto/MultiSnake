'use strict';

export default class Apple {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    draw(context) {
        context.beginPath()
        context.arc(this.x, this.y, 10, 0, 2*Math.PI);
        context.fillStyle = "#90EE90";
        context.fill();
        context.closePath();
    }
    
}