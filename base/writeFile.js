"use strict";

/*
 * writeFile 表示写入文件
 * 文件如果不存在：直接创建，然后将内容写入到该文件中
 * 如果文件已存在：直接替换，也叫作截断，写入新的数据
 * */

const fs = require('fs');
const path = require('path');

// 异步向文件中写入数据
fs.readFile(path.join(__dirname, 'README.md'), 'utf8', (err, data)=> {
  if (err) {
    throw err;
  }
  fs.writeFile(path.join(__dirname, 'LIST.md'), data, 'utf8', (err) => {
    if (err) {
      throw err;
    }
    console.log('writeFile succeed');
  });
});

// 同步向文件中写入数据
// 同步文件写入必须 try-catch

// try {
//   fs.writeFileSync(path.join(__dirname, 'LIST.md'), '同步方式写入的数据');
//   console.log('文件写入成功');
// } catch (e) {
//   throw e;
// }
