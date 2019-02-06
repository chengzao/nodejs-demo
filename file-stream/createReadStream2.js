/**
 * 流
 */
// 管道流:管道流是一个以一个流的输出作为另一个流的输入的机制。
// 这个机制通常用于从一个流获取数据并传给另一个流。

var fs = require("fs");
//创建一个读取流
var readerStream = fs.createReadStream('input.txt');
// 创建一个写入流
var writerStream = fs.createWriteStream('output01.txt');
// 将读取流的数据通过管道传递给写入流
readerStream.pipe(writerStream);
console.log("程序结束");


