/**
 * net net模块应用于服务器端和客户端，提供了一些封装好的网络相关方法
 * http://www.gbtags.com/gb/tutorials/222/1171.htm
 *
 *
*/
var net = require('net');
var server = net.createServer(function(connection) {
  console.log('client connected');
  connection.on('end', function() {
    console.log('client disconnected');
  });
  connection.write('Hello World!\r\n');
  connection.pipe(connection);
});
server.listen(8080, function() {
  console.log('server is listening');
});