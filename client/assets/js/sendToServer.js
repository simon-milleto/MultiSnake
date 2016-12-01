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
		socket.emit('disconnet', 'Un utilisateur s\'est déconnecté');
	},
	sendMove(event){
		socket.emit('movement', event);
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

socket.on('disconnect', function() {
	serverObject.emit('disconnect');
});

window.addEventListener('offline', function() {
	serverObject.emit('disconnect');
});

 
export default serverObject;