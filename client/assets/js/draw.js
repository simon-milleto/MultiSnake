'use strict';

import Snake from './snake';

export default class Draw {

    constructor(context) {
        this.context = context;
    }

    snake(x,y) {
        let snake = new Snake(x, y);
        snake.draw(this.context);

        return snake;
    }

}
