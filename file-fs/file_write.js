/**
 * 文件系统:wirte
语句
    fs.writeFile(filename, data[, options], callback)
    * 注意这个方法在写入的时候会覆盖原有文件的内容。

参数说明

 1、path：包含文件名的文件路径
 2、data：带写入文件的字符串类对象和Buffer类对象
 3、options：一个包含了编码方式、打开模式和文件操作标志的对象。
 默认情况下，编码方式是utf-8，打开模式为0666，标志为“w”
 4、callback：包含一个err参数的回调函数，用于写入出错时报错

*
* */

var fs = require("fs");
console.log("即将写入文件");
fs.writeFile('input.txt', 'gbtags',  function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("成功写入数据！");
  console.log("让我们来看看写入的新数据");
  fs.readFile('input.txt', function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("异步读取: " + data.toString());
  });
});


