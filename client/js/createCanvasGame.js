'use strict';

import * as constant from './constant';

export default function createCanvasGame() {

	let canvas = document.getElementById('canvas');

	let context = canvas.getContext('2d');

	context.fillStyle = constant.BACKGROUND_COLOR;
	context.fillRect(0, 0, canvas.width, canvas.height);

	return context;

}
