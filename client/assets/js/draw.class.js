'use strict';

import Snake from './snake.class';

export default class Draw {

    constructor(context) {
        this.context = context;
    }

    snake() {
        let snake = new Snake(50, 50);
        snake.draw(this.context);
    }

}