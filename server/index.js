const express = require('express');

const app = express();

app.use(express.static('../client'));

app.get('/', function (req, res) {
  res.render(__dirname + 'index.html');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});