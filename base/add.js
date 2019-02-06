
// 在add.js文件中 module.exports 等价于 exports
// 这俩家伙是从形参中传递过来的

module.exports.foo = 'bar';

// exports.add = function (a,b) {
//   return a + b;
// };

// 直接给exports赋值是不行的，
// exports = function (a,b) {
//   return a + b;
// };

module.exports = function (a,b) {
  return a + b;
};

// module.exports.add = function (a,b) {
//   return a + b;
// };

// module.exports.sub = function (a,b) {
//   return a - b;
// };

// exports.add = function () {
//   return a + b;
// };

// 上面都是一样的，都是在给module的exports对象挂载属性


