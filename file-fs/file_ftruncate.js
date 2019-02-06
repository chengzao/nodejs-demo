/**
 * 缩短文件:ftruncate
 *

语句
    fs.ftruncate(fd, len, callback)

参数说明

 1、fd：通过fs.open()方法创建的文件描述器
 2、len：缩短后的文件长度
 3、callback：用于报错的无参数回调函数
*
* */

var fs = require("fs");
var buf = new Buffer(1024);
console.log("Going to open an existing file");
fs.open('input01.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
  console.log("Going to truncate the file after 10 bytes");
  console.log("Before truncating:");
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if (err){
      console.log(err);
    }
    if(bytes > 0){
      console.log(buf.slice(0, bytes).toString());
    }
  });
  // 缩短文件
  fs.ftruncate(fd, 10, function(err){
    if (err){
      console.log(err);
    }
    console.log("File truncated successfully.");
    console.log("Going to read the same file");
    console.log("After truncating:");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
        console.log(err);
      }
      if(bytes > 0){
        console.log(buf.slice(0, bytes).toString());
      }
      fs.close(fd, function(err){
        if (err){
          console.log(err);
        }
        console.log("File closed successfully.");
      });
    });
  });
});

