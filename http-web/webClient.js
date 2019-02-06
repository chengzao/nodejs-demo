/**
 * 创建客户端
 * http://www.gbtags.com/gb/tutorials/222/1172.htm
 */
var http = require('http');
// 对象options定义了用于请求的一些参数
var options = {
  host: 'localhost',
  port: '8081',
  path: '/index.html'
};
// 回调函数callback用于处理响应
var callback = function(response){
  // 不断更新数据流
  var body = '';
  response.on('data', function(data) {
    body += data;
  });

  response.on('end', function() {
    // 数据完全接收
    console.log(body);
  });
}
// 向服务器发送一个请求
var req = http.request(options, callback);
req.end();
