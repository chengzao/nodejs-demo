'use strict';

const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
	console.log(req.url);
	res.writeHead(200, {
		'Content-Type': 'text/html;charset=utf-8'
	});
	let url = req.url;
	if (url === '/') {
		// 任何请求都会响应一个 hello world  
		res.end('hello world'); // 注意：在一次响应中，end 只能调用一次，否则报错
	} else if (url === '/about') {
		fs.readFile('./http1.js', (err, data) => {
			res.end(data);
		});
	}
});

server.listen(3000, '127.0.0.1', () => {
	console.log('server on http://127.0.0.1:3000');
});