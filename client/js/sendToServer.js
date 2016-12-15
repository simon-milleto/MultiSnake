"use strict";
import io from 'socket.io-client';
var socket = io();
var ee = require('event-emitter');

var clientId;

var serverObject = ee({
	sendNewUser(){
		socket.emit('client ID', clientId);
	},
	sendDeleteUser(){
		socket.emit('disconnect', 'Un utilisateur s\'est déconnecté');
	},
	sendMove(event){
		socket.emit('movement', event);
	},
	changeDirection(snake, direction) {
		socket.emit('changeDirection', {snake: snake, direction: direction});
	}
});

socket.on('start', function(){
	serverObject.emit('start');
});

socket.on('end', function(){
	serverObject.emit('end');
});

socket.on('client ID', function(id){
	clientId = id;
});

socket.on('connect message', function() {
	serverObject.emit('connection');
});

socket.on('disconnect', function() {
	serverObject.emit('disconnect');
});

socket.on('new_apple', function(data) {
	serverObject.emit('new_apple', data);
});

socket.on('setDirection', data => {
	serverObject.emit('setDirection', data);
});

window.addEventListener('offline', function() {
	serverObject.emit('disconnect');
});

 
export default serverObject;