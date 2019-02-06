"use strict";

const fs = require('fs');
const path = require('path');

let rootDir = __dirname;

getAllJSFiles(rootDir, (err, files)=> {
  if (err) {
    throw err;
  }
  console.log(files);
});

// 该方法通过执行一个路径，得到该路径下所有的.js后缀文件
function getAllJSFiles(rootDir, callback) {
  fs.readdir(rootDir, (err, files)=> {
    if (err) {
      return callback(err, null);
    }

    let jsFiles = [];
    let count = 0; // 外部定义一个变量，这个变量一般叫做 哨兵变量，一般用来监视一堆的异步任务是否执行结束了
    // 下面的循环是一系列的异步操作，无法确定什么时候执行完毕
    files.forEach((file)=> {

      // 由于是一组异步任务，无法确定这一组任务什么时候执行完毕
      fs.stat(path.join(rootDir, file), (err, stats) => {
        if (err) {
          return callback(err, null);
        }
        // 如果当前条目是文件并且后缀名是 .js 文件
        if (stats.isFile() && path.extname(file) === '.js') {
          jsFiles.push(file);
        }

        // 每一个异步任务执行结束，都要 把 count 状态 进行更新 +1
        count++;

        // 状态变量更新完毕之后，通过判定 count 是否 等于当前遍历数组的长度
        if (count === files.length) {
          callback(null, jsFiles);
        }
      });
    });
    // callback(null, jsFiles); // 这样是不可行的
  });
}
