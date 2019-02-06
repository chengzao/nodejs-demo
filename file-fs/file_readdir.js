/**
 * readdir:读取目录
 *
 *
 * fs.readdir(path, callback)

 参数说明
 1、path：包含目录名的路径
 2、callback：带err和files两个参数的回调函数。
    Files是一个由目录中包含的文件名（包括.和..）组成的字符串数组。
 */

var fs = require("fs");
console.log("Going to read directory /tmp");
fs.readdir("tmp/",function(err, files){
  if (err) {
    return console.error(err);
  }
  files.forEach( function (file){
    console.log( file );
  });
});
