const app = require('express')();
const http = require('http').Server(app);
const socket_io = require('socket.io');
var io = socket_io(http);

app.get('/', function(request, response){
    console.log("HTTP - GET REQUEST");
    response.end("Smart Factory Exmaple");
});

http.listen(4000, "localhost", function(){
    console.log("HTTP Server Listening...");
});

http.on('connection', function(socket){
    console.log('HTTP Connection...');
});

io.on('connection', function(client_socket){
    console.log("Socket.IO Connection Event");
    console.log(client_socket.id);
    io.emit('id_registration', client_socket.id);
});
