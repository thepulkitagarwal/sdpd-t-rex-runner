var socket = io.connect('http://localhost:3000');
var tRex = Runner.instance_.tRex;

socket.on('connect', function(data) {
	console.log('Connected to socket.io server');
});

socket.on('jump', function(data) {
	tRex.startJump();
})
