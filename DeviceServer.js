const net = require('net');
const io = require('socket.io-client');

const server = net.createServer((client) => {
  // 'Connection' listener
  var chatting_socket = io("http://localhost:4000");
  
  chatting_socket.on('id_registration', function(id){
    console.log("Device Chatting Socket ID:", chatting_socket.id);
  });
  
  client.on('data', function (data) {
    console.log(data.toString());
  });
}).listen(8124, '127.0.0.1', () => {
  console.log('Device Server Listening...');
});
