// var add  = require('./add.js');

// var sum = add(1,2);

// console.log(sum);

var fs = require('fs');

// 构造函数
function Module() {
  this.exports = {};
}

function myRquire(modulePath) {
  // 得到原始的文件模块字符串
  var moduleStr = fs.readFileSync(modulePath);

  // 
  var funcStr = '(function(exports,module){'+moduleStr+' return module.exports;})';

  // 通过eval得到一个函数
  var func = eval(funcStr);

  // 实例化一个Module对象
  var module = new Module();

  var result =  func(module.exports,module);

  return result;

}


var result = myRquire('./add.js');

console.log(result(1,2)); //3
