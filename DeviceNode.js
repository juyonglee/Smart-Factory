const net = require('net');

const client = net.connect({ port: 8124, host: '127.0.0.1', family: 4 });
var deviceSendData;

client.on('connect', function () {
    console.log('Client connect!');
    if (!process.argv[2]) {
        deviceSendData = "Device TEST"
    } else {
        deviceSendData = process.argv[2]
    }
});

client.on('ready', function () {
    console.log('Client ready!');
    setInterval(function () {
        client.write(deviceSendData);
    }, 1000);
});

client.on('Device_Setting', function(settingInfo){
    console.log("[Device Setting]");
    console.log(settingInfo);
});

client.on('end', () => {
    console.log('Disconnected from Device Server!');
});
