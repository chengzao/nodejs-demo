/**
 * file_stat

获取文件信息
    fs.stat(path, callback)

 1、path：包含文件名的路径字符串

 2、callback：包含err和stats两个参数的回调函数。stats的值如下：
 （1）stats.isFile()：如果文件类型是一个简单文件则返回tru
 （2）stats.isDirectory()：如果文件类型是一个目录的话返回true
 （3）stats.isBlockDevice()：如果文件类型是一个块设备的话返回true
 （4）stats.isCharacterDevice()：如果文件类型是一个字符设备的话返回true
 （5）stats. isSymbolicLink()：如果文件类型是一个符号链接（软链接）的话返回true
 （6）stats.isFIFO()：如果文件类型是FIFO存储器的话则返回true
 （7）stats.isSocket()：如果文件类型是一个套接字的话则返回true
 */

var fs = require("fs");
console.log("即将获取文件信息!");
fs.stat('input.txt', function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("成功获取文件!");

  // 检查文件类型
  console.log("是否为文件?" + stats.isFile());
  console.log("是否为目录?" + stats.isDirectory());
});


