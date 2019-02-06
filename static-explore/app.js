'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const config = require('./config'); 
const mime = require('mime'); 
const template = require('art-template'); 
const moment = require('moment'); 

// 静态资源服务根路径
const rootDir = path.join(__dirname, 'node_modules');

const server = http.createServer();

server.on('request', (req, res) => {
  // 获取当前http请求路径
  let url = req.url;

  // 根据不同的请求路径，做不同的处理，最后响应给用户
  if (url === '/') {

    renderIndex(rootDir, req,res);

  } else if (url.startsWith(config.staticPath)) {
    // 直接把该http请求路径当做静态资源路径
    let fullPath = path.join(__dirname, url);

    fs.readFile(fullPath, (err, data) => {
      if (err) {
        return resError(res);
      }
      res.writeHead(200, {
        'Content-Type': mime.lookup(fullPath)
      });
      res.end(data);
    });

  } else if (url === '/favicon.ico') {
    res.end();
  } else {
    let urlPath = path.join(rootDir, url); 

    fs.stat(urlPath, (err, stats) => {
      if (err) {
        // return res.end(err.message);
        return resError(res);
      }
      if (stats.isDirectory()) {
        renderIndex(urlPath, req,res);
      } else if (stats.isFile()) {
        fs.readFile(urlPath, (err, data) => {
          if (err) {
            // return res.end(err.message);
            return resError(res);
          }
          res.writeHead(200, {
            'Content-Type': mime.lookup(urlPath)
          });
          res.end(data);
        });
      }
    });


  }
});

// 开始监听，启动服务器
server.listen(config.port, config.host, () => {
  console.log(`服务器启动成功，请访问：http://${config.host}:${config.port}`);
});
// 错误跳转页面
function resError(res) {
  fs.readFile(path.join(__dirname, '500.html'), (err, data) => {
    res.end(data);
  });
}

/**
 * 根据一个绝对路径目录，获取该目录下所有的条目（文件名、目录名）渲染到index.html页面中
 * @param  {[String]} dirPath [目录名称]
 * @param  {[Object]} res     [响应对象]
 * @return {[undefined]}      [undefined]
 */
function renderIndex(dirPath, req,res) {
  let prev = path.join(req.url, '../');  // 上一级
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      // return res.end(err.message);
      return resError(res);
    }
    let dirArr = [];  // 目录
    let fileArr = []; // 文件
    files.forEach((item, index) => {
      let fullPath = path.join(dirPath, item); // 拼接一个完整的路径
      let stats = fs.statSync(fullPath);       // 根据路径拿到状态对象
      let href = fullPath.split('node_modules')[1];   // 跳转路径
      if (stats.isDirectory()) {    // 判断文件夹是目录
        dirArr.push({
          name: item,
          href: href,
          mtime: moment(stats.mtime).format('YYYY-MM-DD HH:mm:ss')
        });
      } else if (stats.isFile()) {  // 判断文件
        fileArr.push({
          name: item,
          href: href,
          mtime: moment(stats.mtime).format('YYYY-MM-DD HH:mm:ss'),
          size: stats.size
        });
      }
    });
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        // return res.end(err.message);
        return resError(res);
      }
      // 根据一个原始的模板字符串，得到一个渲染函数
      let compiled = template.compile(data);
      // 向渲染函数中注入数据,得到渲染过后的html字符串
      let htmlStr = compiled({
        dirArr,
        fileArr,
        prev
      });
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end(htmlStr);
    });
  });
}
