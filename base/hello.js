console.log('hello Node.js')


console.log('今天买了%s，一共花了钱%d', 'iPhone 10Pus', '5998');

/*
 * time 和 timeEnd
 * */

console.time('timer');
for (var i = 0; i < 1000; i++) {
}
console.timeEnd('timer');


// 文件环境中的global
var a = 'this is a test';

global.a = a;
console.log(global.a);

