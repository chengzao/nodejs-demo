"use strict";

const path = require('path');

// 如果是一个参数：获取文件名+文件后缀
// 如果是两个参数，获取文件名部分
console.log(path.basename('/foo/bar/baz/asdf/quux.html')); // 获取文件名+文件的后缀
console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html')); // 第二个参数指定是否不包含后缀名
console.log(path.basename('/foo/bar/baz/asdf/quux.txt', '.txt'));

// 获取一个路径字符串的路径部分
// 文件不一定有后缀名
console.log(path.dirname('/foo/bar/baz/asdf/quux'));

// 获取文件后缀名
console.log(path.extname('index.html')); // returns '.html'
console.log(path.extname('index.coffee.md')); // returns '.md'

// 判断一个路径是否是绝对路径
console.log(path.isAbsolute('/foo/bar')); // => true
console.log(path.isAbsolute('/baz/..')); // => true
console.log(path.isAbsolute('qux/')); // => false
console.log(path.isAbsolute('.')); // => false

// 在Windows操作系统中，路径分隔符 是 反斜杠 \  // Node.js 内部帮你转换成了 反斜杠
// 在类 Unix 的操作系统中，路径分隔符 是 正斜杠
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// console.log(path.join('foo', {}, 'bar')); // 也就是说 ，json中的方法里面的参数必须是字符串

// 注意：以后再去进行路径拼接的时候，使用path.join 方法 ，避免出错
console.log(path.join('c:/', '/a','//b')); // => c:\a\b

// normalize 把 一个非标准路径转换为一个标准路径
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));

// 把一个路径转换为一个方便操作的对象
var pathObj = path.parse('/home/user/dir/file.txt');
console.log(pathObj);

// 把一个路径格式的对象转换为一个真实的路径
console.log(path.format({
  root: "/",
  dir: "/home/user/dir",
  base: "file.txt",
  ext: ".txt",
  name: "file"
}));

// 获取操作系统的路径分隔符
console.log(path.sep);

// 获取操作系统支持的一些方法
console.log(path.win32);
