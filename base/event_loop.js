"use strict";
/*
 * 事件驱动：
 *  先执行当前所有的普通代码，只要不是setTimeout、setInterval、process.nextTick
 *  Node.js优先执行所有的普通代码,哪怕setTimeout 的时间是 0 ，也会先执行完所有的普通代码
 * */

const fs = require('fs');

var foo = 'bar';

(function () {
  console.log('我是匿名函数自执行');
})();

// 当前来看：是异步的
// 这种代码，运行过后，立即结束
// 仅仅把这个任务添加到了事件队列中，事件队列说白了就是存储了一堆的执行任务
var state = setTimeout(function () {
  console.log('我是一个1秒的定时器');
  fs.readFile('',function () {

  });
}, 1000);

console.log(state);

var data = fs.readFileSync('./README.md').toString();

setTimeout(function () {
  console.log('我是一个0秒的定时器');
}, 0);

console.log('后续的代码继续执行');

// 普通代码只要不调用就不会执行，仅仅顶多做了把这个函数放到当前运行环境中
function test() {
  setTimeout(function () {

  }, 0);
}

// 当主线程把所有的普通代码执行完毕之后：开始循环：{ 循环提取事件队列中的任务 }
/*
 * 提取出来之后
 * 一种是普通的伪异步任务：
 * setTimeout(callback,delay[,arg][,…])
 * setInterval(callback,delay[,arg][],…)
 * process.nextTick(callback[,arg][,…]) : 会添加到当前事件循环队列的尾部，比 setImmediate 的优先级要高
 * setImmediate(callback[,arg][,…]) : 会直接扔到 下一次事件循环队列的顶部
 *
 * 还是有Node.js原生提供的一些API：
 *  readFile、writeFIle、appendFile、mkdir.....
 *
 *  能进入事件队列的
 *
 *
 *  当Node.js提取出一个任务之后：
 *    看一下是不是有IO操作：
 *      如果不是IO操作：直接在当前的主循环线程上执行
 *      当你在一个setTimeout中写了一个white(true)之后，当被提取出来之后，直接执行，阻塞了主线程的执行
 *      主线程无法继续调度下一个任务
 *      注意：Node.js只有把当前提取的任务执行完了，才能继续循环提取下一个任务
 *      在写Node.js代码的时候：不要写大量的需要CPU计算的代码
 *
 *    如果是IO操作：
 *      从线程池中找一个可以用的线程来帮我执行IO这件事儿（等待）
 * */

// Node.js会把这个任务交给线程池中的一个可用线程来执行
// 当该线程把读取文件这件事儿完成了之后：（得到了数据）
// 把该数据传递给 回调函数  - > 然后扔到 事件队列中
// 只有该 回调函数什么时候被提取到：什么时候才会被执行
fs.readFile('路径',function (err, data) {

});

// fs.readFileSync()  非 IO 操作
