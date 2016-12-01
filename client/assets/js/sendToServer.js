"use strict";
import io from 'socket.io-client';
var socket = io();
var ee = require('event-emitter');

var serverObject = ee({
	sendNewUser(){
		socket.on('client ID', function(id){
			console.log("Nouvel utilisateur : " + id);
		});
	},
	sendDeleteUser(){
		socket.on('disconnect message', function(){
			console.log("Un utilisateur est parti");
		});
	},
	sendMove(event){
		socket.emit('movement', event);
	}
});

socket.on('start', function(e){
	console.log(e);
});
socket.on('end', function(e){
	console.log(e);
});
 

export default serverObject;
