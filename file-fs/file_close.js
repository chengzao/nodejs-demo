/**
 * 文件系统:close

语句
    fs.close(fd, callback)

参数说明

 1、fd：通过fs.open()方法创建的文件描述器
 2、callback：没有参数的回调函数，用于报错
*
* */

var fs = require("fs");
var buf = new Buffer(1024);
console.log("即将打开文件");
fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("成功打开文件");
  console.log("即将读取文件");
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if (err){
      console.log(err);
    }
    if(bytes > 0){
      console.log(buf.slice(0, bytes).toString());
    }
    // 关闭打开的文件
    fs.close(fd, function(err){
      if (err){
        console.log(err);
      }
      console.log("成功关闭文件");
    });
  });
});


