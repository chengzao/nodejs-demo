// 在加载文件模块的时候可以省略
// Node.js会按照一定的补全规则
// .js       ./foo.js      就是我们自己写的脚本文件 如果是js文件会读取该文件然后解析
// .node     ./foo.Node    它是一种二进制文件（暂时不需要关心）
// .json     ./foo.json     一个json文件  也会读取该文件，JSON.parse(读取到的文件字符串)


// var foo = require('./foo'); // 拿到的是 foo.js 文件模块 ，引诱 .js 的路径优先

// 以后在加载json文件模块的时候，最好把后缀名补齐
var foo = require('./dir/package.json');

console.log(foo);

console.log(module.paths);