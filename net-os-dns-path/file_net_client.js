/**
 * net net模块应用于服务器端和客户端，提供了一些封装好的网络相关方法
 * http://www.gbtags.com/gb/tutorials/222/1171.htm
 *
 *
*/
var net = require('net');
var client = net.connect({port: 8080}, function() {
  console.log('connected to server!');
});
client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function() {
  console.log('disconnected from server');
});