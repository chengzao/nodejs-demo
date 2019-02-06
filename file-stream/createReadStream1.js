//从流中读取数据
var fs = require("fs");
var data = '';
// 创建一个读取流
var readerStream = fs.createReadStream('input.txt');
//设置编码方式为utf-8
readerStream.setEncoding('UTF8');
// 处理流事件： data, end, and error
readerStream.on('data', function(chunk) {
  data += chunk;
});
readerStream.on('end',function(){
  console.log(data);
});
readerStream.on('error', function(err){
  console.log(err.stack);
});
console.log("程序结束");


//向流中写入数据
var fs = require("fs");
var data = 'gbtags';
// 创建一个写入流
var writerStream = fs.createWriteStream('output.txt');
// 以utf-8编码方式写入
writerStream.write(data,'UTF8');
// 标记文件结尾
writerStream.end();
// 处理流事件 --> finish, and error
writerStream.on('finish', function() {
  console.log("写入完成");
});
writerStream.on('error', function(err){
  console.log(err.stack);
});
console.log("程序结束");

//