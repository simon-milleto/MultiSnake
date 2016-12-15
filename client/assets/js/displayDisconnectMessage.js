'use strict';

export default function displayDisconnectMessage() {
	let body = document.body;
	let box = document.getElementById("message");

	var h2 = document.createElement("h2");
	var p = document.createElement("p");

	var textH2 = document.createTextNode("Warning !");
	var textP = document.createTextNode("You have been deconnected, please check your internet connection and try again");
	h2.appendChild(textH2);
	p.appendChild(textP);
	box.appendChild(h2);
	box.appendChild(p);
	body.className += "blur";
	box.className += "active";
}
