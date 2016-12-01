'use strict';

import Snake from './snake';
import Apple from './apple';

export default class Draw {

    constructor(context) {
        this.context = context;
    }

    snake() {
        let snake = new Snake(50, 50);
        snake.draw(this.context);
    }
    
    apple() {
        let apple = new Apple(200, 350);
        apple.draw(this.context);
    }

}