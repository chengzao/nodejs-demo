/**
 * EventEmitter
 * 
 * 事件驱动的编程:事件触发器
 *
 * http://www.gbtags.com/gb/tutorials/222/1146.htm
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();
// 监听者1
var listener1 = function listener1() {
  console.log('监听者1执行完毕');
}
// 监听者2
var listener2 = function listener2() {
  console.log('监听者2执行完毕');
}
//将连接事件和监听者1的函数绑定
eventEmitter.addListener('connection', listener1);
//将连接事件和监听者2的函数绑定
eventEmitter.on('connection', listener2);
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听者正在监听连接事件");
// 触发连接事件
eventEmitter.emit('connection');
//解绑监听者1和连接事件
eventEmitter.removeListener('connection', listener1);
console.log("监听者1不再监听");
// 触发事件
eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听者正在监听连接事件");
console.log("程序结束");

