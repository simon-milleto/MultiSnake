var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('../client'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
	io.emit('client ID', socket.id);
	io.emit('connect message');
	socket.on('chat message', msg => {
		io.emit('chat message', msg);
	});
	socket.on('keypress message', msg => {
		io.emit('keypress message', msg);
	});
	socket.on('disconnect', () =>{
		io.emit('disconnect message');
	});
});

http.listen(3000, () => {
	console.log('listening on *:3000');
});