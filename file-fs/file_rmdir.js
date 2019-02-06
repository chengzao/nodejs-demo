/**
 * rmdir:删除目录
 *
 *
 * fs.rmdir(path, callback)

 参数说明
 1、path：包含文件名的路径
 2、callback：无参、报错用回调函数
 */

var fs = require("fs");
console.log("Going to delete directory test");
fs.rmdir("tmp/test",function(err){
  if (err) {
    return console.error(err);
  }
  console.log("Going to read directory /tmp");
  fs.readdir("tmp/",function(err, files){
    if (err) {
      return console.error(err);
    }
    files.forEach( function (file){
      console.log( file );
    });
  });
});
