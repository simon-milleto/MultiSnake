'use strict';

const BACKGROUNDCOLOR = '#000000';

export default function createCanvasGame() {

	let canvas = document.getElementById("canvas");

	let context = canvas.getContext("2d");

	context.fillStyle = BACKGROUNDCOLOR;
	context.fillRect(0, 0, canvas.width, canvas.height);

	return context;

}
