const net = require('net');

const server = net.createServer((client) => {
    // 'Connection' listener
    client.on('data', function(data){
      console.log(data.toString());
    });
  }).listen(8124, '127.0.0.1', () => {
    console.log('Device Server Listening...');
  });
