/**
 * path 模块用于管理和转换文件的路径
 * http://www.gbtags.com/gb/tutorials/222/1171.htm
 方法
 1、path.normalize(p)：规范化路径字符串
 2、path.join([path1][, path2][, ...])：把多个路径结合在一起并规范化。
 3、path.resolve([from ...], to)：将一个相对路径转换为绝对路径
 4、path.isAbsolute(path)：判断path是否为绝对路径。
 5、path.relative(from, to)：将参数from表示的路径关联到参数to表示的路径
 6、path.dirname(p)：返回路径的目录名
 7、path.basename(p[, ext])：返回一个路径的最后一部分
 8、path.extname(p)：返回一个路径的拓展名。
 9、path.parse(pathString)：将路径字符串转化为路径对象
 10、path.format(pathObject)：将路径对象转化为字符串

 属性
 1、path.sep：文件分割符号，如”\\”和”/”
 2、path.delimiter：路径分隔符，如”;”和”:”
 3、path.posix：以POSIX的方式提供对上述路径方法的访问
 4、path.win32：以win32的方式提供对上述路径方法的访问
 */

var path = require("path");
// 规范化
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
// 联合
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
// 转换
console.log('resolve : ' + path.resolve('main.js'));
// 拓展名
console.log('ext name : ' + path.extname('main.js'));
