"use strict";

const fs = require('fs');
const path = require('path');


// 第一种 

let rs = fs.createReadStream('D:/CentOS-7-x86_64-DVD-1511.iso');
let ws = fs.createWriteStream('F:/CentOS-7-x86_64-DVD-1511.iso');

//let size = fs.statSync('D:/CentOS-7-x86_64-DVD-1511.iso').size;

// console.log(size);


rs.on('data', (data)=> {
  // 把data直接写入
  ws.write(data); // write 方法是异步的，写入的速度跟不上读取的速度
});

// 当文件读取完毕之后，会触发 end 事件
rs.on('end', ()=> {
  console.log('success');
});


// 第二种

let rs = fs.createReadStream('D:/CentOS-7-x86_64-DVD-1511.iso');
let ws = fs.createWriteStream('F:/CentOS-7-x86_64-DVD-1511.iso');

rs.pipe(ws);