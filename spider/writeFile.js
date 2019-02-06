var fs = require('fs');

// 写入文件，第一个参数是指定要写入的文件路径
// 第二个参数指定要写入的数据
// 如果文件不存在，直接创建，将数据写入
// 如果文件已存在，内容会被覆盖掉
fs.writeFileSync('./a.txt','aaa ');

// console.log(__dirname);
// console.log( __filename );