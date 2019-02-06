'use strict';
var fs =require('fs');

var frames = [];

for (var i = 1; i < 15; i++) {
	frames.push(fs.readFileSync('./frames/'+i+'.txt').toString());
}

var fps = 1;
var count = 0;

// 不断的循环输出帧数组中的内容，不断的输出数组的0-数组的长度-1的内容
setInterval(function () {
  // 先清屏
  process.stdout.write('\u001b[2J\u001b[0;0H');  

  // 再输出
  process.stdout.write(frames[count]);

  count++;
  
  // 验收判断
  if(count === frames.length){
    count = 0;
  }

},1000/fps);