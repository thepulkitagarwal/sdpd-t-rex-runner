var express = require('express')
var app = express()
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.get('/jumpbutton', function(req, res) {
	res.sendFile(__dirname + '/jumpbutton.html')
})


app.get('/jump', function(req, res) {
	io.sockets.emit('jump', {})
	res.send('jumping')
});

app.use('/img', express.static('img'))
app.use('/scripts', express.static('scripts'))

io.on('connection', function(socket) {
	console.log('Connected via socket.io')
});

server.listen(3000, function() {
	console.log('Listening on port 3000')
});

