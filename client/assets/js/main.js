"use strict";

import createCanvasGame from './createCanvasGame.js';
import Draw from './draw';

document.addEventListener('DOMContentLoaded', function () {

    let context = createCanvasGame();

    let draw = new Draw(context);

    draw.snake();
    draw.apple();

});
