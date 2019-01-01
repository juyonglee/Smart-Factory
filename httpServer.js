const app = require('express')();
const http = require('http').Server(app);

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
