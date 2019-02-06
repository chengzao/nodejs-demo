/**
 * exports 和 module.exports 之间的关系
 */

function Module() {
  this.exports = {};
}

/**
 * 模拟exports
 * @param  {[Object]} exports [形参中的exports就是 module.exports ]
 * @param  {[type]} module  [ module 就是实例化的一个对象 module.exports == export]
 */
function myExports(exports, module) {
  // var exports = module.exports;
  console.log(exports === module.exports);

  exports.add = function () {
    console.log('add Function');
  };

  exports.sub = function () {
    console.log('sub Function');
  };

  exports = function () {
    console.log('我是直接通过给exports赋值得到的一个函数');
  };

  return module.exports;
}

var module = new Module();

var result = myExports(module.exports, module);

console.log(result);

// result.add();
