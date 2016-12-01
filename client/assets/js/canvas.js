'use strict';

export default class Canvas {
    draw() {
      let canvas = document.getElementById('canvas');

      let context = canvas.getContext('2d');

      context.fillStyle = '#000000';
      context.fillRect(0, 0, canvas.width, canvas.height);

      return context;
    }
}
