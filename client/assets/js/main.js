'use strict';

import Board from './board';
import Draw from './draw';

document.addEventListener('DOMContentLoaded', function () {

  let board = new Board(1600, 900)

  let draw = new Draw(board.context);

});
