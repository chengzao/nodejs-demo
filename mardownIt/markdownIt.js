"use strict";
const fs = require('fs');
const path = require('path');

var md = require('markdown-it')();

// 第一个参数表示要监视的文件名
// 参数 interval 监听的时间
fs.watchFile(path.join(__dirname, 'README.md'), {
  interval: 500
}, (curr, prev)=> {
  if (curr.mtime !== prev.mtime) {
    // 读取原始的模板字符串
    var htmlTemplate = fs.readFileSync(path.join(__dirname, 'md-template.html'), 'utf8');
    fs.readFile(path.join(__dirname, 'README.md'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      htmlTemplate = htmlTemplate.replace('{{title}}', '笔记');
      htmlTemplate = htmlTemplate.replace('{{content}}', md.render(data));

      // 将转换后的html字符串保存到一个html文件中
      fs.writeFile(path.join(__dirname, 'README.html'), htmlTemplate, (err)=> {
        if (err) {
          throw err;
        }
        console.log('文件转换成功');
      });
    });
  }
});
