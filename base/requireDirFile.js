// 目录形式的加载规则，说白了也是加载一个文件模块
// 注意：大家在使用的时候，千万不要这么用
//  如果Node.js在加载的时候，没有找到文件，但是找到了一个目录
// 直接找该目录下是否有一个叫做 package.json 的文件
// package.json 文件中的有一个叫做 main  的属性，指定了要加载的文件模块
// 如果没有package.json文件或者里面没有main属性或者里面的main属性指定的文件模块不存在
// 
// 
// Node.js继续找该目录下的一个叫做 index.js、index.node、index.json 的文件
var dir = require('./dir');

console.log(module.paths);
