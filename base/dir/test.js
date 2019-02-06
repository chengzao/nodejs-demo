// 现在，Node.js通过这样一种机制，就解决了第三方包随便混乱的放置
// 这就是规范
// 注意：以后在放置第三方包的时候直接放到当前项目根目录的 node_modules 目录下
// 我们在用的时候：require  还需要关心路径吗
// 都是根据module.paths的查找规则来找到
// 这种查找规则非常类似于：原型链的查找规则、作用域的查找规则


// require内部 自动根据 module.paths 去查找
var cal = require('./foo.js');

// cal();

cal.fn();
//console.log(module.paths);