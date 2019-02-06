/**
 * mkdir:创建目录
 *
 * fs.mkdir(path[, mode], callback)

 参数说明
 1、path：包含目录名的路径
 2、mode：目录权限，默认为0777
 3、callback：无参报错用回调函数。
 */

var fs = require("fs");
console.log("Going to create directory /tmp/test");
fs.mkdir('tmp/test',function(err){
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
});
