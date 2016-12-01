const express = require('express');
const app = express();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

app.use(express.static('../client'));

app.get('/', function (req, res){
	res.render(__dirname + 'index.html');
});

app.listen(3000, () =>{
	console.log('Listening on port 3000');
});