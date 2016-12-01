'use strict';

import Snake from './snake';
import Apple from './apple';

export default class Draw {

    constructor(context) {
        this.context = context;
    }

    snake() {
        let snake = new Snake(this.context, 50, 50);
        snake.draw();
    }
    
    apple() {
        let apple = new Apple(this.context, 200, 350);
        apple.draw();
    }

}