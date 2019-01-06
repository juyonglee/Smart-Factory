var Struct = require('struct');

var sampleData = "5b04016e02020202020202020202000000006f000000010002000000000000053c00fa002828020896003200fa001e003228000000000001ffffffffffffffffffff00000000000000000cfb010000050300000000007c01570474046400000002000002000000000000000000460200004b8f5d";
var sampleBuffer = Buffer.alloc(sampleData.length, sampleData, "hex");
console.log(sampleBuffer);
protocol(sampleBuffer);
var object = {};

//  Private Method
function protocol(data, object) {
    console.log('[집진기 Protocol]');
    object['m_byStart'] = data.readUInt8(0).toString(16);
    object['m_byCmd'] = data.readUInt8(1).toString(16);
    
    console.log('m_byStart:', data.readUInt8(0).toString(16));
    console.log('m_byCmd:', data.readUInt8(1).toString(16));
}
