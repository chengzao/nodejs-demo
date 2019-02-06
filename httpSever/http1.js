'use strict';

// 1. 加载http模块
const http = require('http');

const port = 3000;
const host = '127.0.0.1';

// 2. 创建一个http服务器
const server = http.createServer();

// 3. 监听 request 事件，处理用户的请求
// NOde.js会将用户的请求报文解析之后，封装到一个 request 对象中，传递给回调函数
server.on('request', (req, res) => {
  let method = req.method; // 获取当前http请求方法
  let url = req.url; // 获取http请求路径部分
  let headers = req.headers; // 获取请求首部字段
  

  // 向客户端响应内容，该内容必须是字符串
  res.write('hello');
  res.write('world');

  // 当服务器使用了 write 方法 向 客户端发送响应的时候，一定结束响应
  // 否则，客户端还以为你的数据没有发送完毕
  // end 方法 用于结束响应
  // 注意：当前的响应是针对于任何 http 请求 做了统一的处理
  res.end();

});

// 4. 监听一个端口号，表示开启服务器
server.listen(port, host, () => {
  console.log('server is running at port 3000');
  console.log('please visit http://127.0.0.1:3000');
});
