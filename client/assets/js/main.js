'use strict';

import createCanvasGame from './createCanvasGame.js';
import Draw from './draw.class';

document.addEventListener('DOMContentLoaded', function () {

    let context = createCanvasGame();

    let draw = new Draw(context);

    draw.snake();

});
