/**
 *全局对象
 */
//__filename
//   表示正在执行的代码的文件名。这个文件名包含代码文件的绝对路径。
console.log( __filename );

//__dirname
//   表示当前执行的代码文件所属的目录名（绝对路径）
console.log( __dirname );

/*
setTimeout(cb,ms)
1、setTimeout(cb, ms)全局函数用于在ms参数指定的时间（单位：毫秒）之后执行回调函数cb。
实际的延迟取决于操作系统计时器粒度和系统加载情况等外部因素。计时器计时不会超过24.8天。
2、这个函数会返回一个不透明的值。这个值表示计时器，可用于清空计时器。
*/
function printHello(){
  console.log( "Hello, World!");
}
// 延迟2秒后调用printHello方法
setTimeout(printHello, 2000);

/*
* clearTimeout(t)
*
* 全局函数用于停止一个通过setTimeout()方法创建的计时器。
* t是setTimeout()方法返回的计时器
* */

function printHello2(){
  console.log( "Hello, World!");
}
var t = setTimeout(printHello2, 2000);
//清除计时器
clearTimeout(t);

/*
* setInterval(cb,ms)
* 该函数用于没经过ms参数指定的时间段（单位：毫秒）后执行一次回调函数cb。
* 实际的延迟取决于操作系统定时器粒度和系统加载情况等外部因素。
* 计时器计时不会超过24.8天。该函数的返回值可用于clearInterval(t)函数（用于停止计时器）的参数。
*
* */

function printHello3(){
  console.log( "Hello, World!");
}
setInterval(printHello3, 2000);