/**
 * 文件系统:read

语句
    fs.read(fd, buffer, offset, length, position, callback)

 1、fd：文件描述器，可通过fs.open()方法的返回值获得
 2、buffer：用于保存从文件读取来的数据
 3、offset：偏移量，用于表示数据在缓存中的起始位置
 4、length：读取数据的字节数
 5、position：表示文件中的起始读取位置。如果为null，则从当前读取位置读取。
 6、callback：包含err，bytesRead和buffer三个变量的回调函数
*
* */

var fs = require("fs");
var buf = new Buffer(1024);
console.log("即将从一个打开的文件中读取数据！");
fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("打开文件成功");
  console.log("即将打开文件");
  fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
    if (err) {
      console.log(err);
    }
    console.log("读取到了" + bytes + "个字节的数据");
    // 只把读取的数据显示
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});


