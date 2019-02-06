/**
 * 功能模块:os
 *http://www.gbtags.com/gb/tutorials/222/1171.htm

 方法
 1、os.tmpdir()：返回操作系统默认存储临时文件的目录
 2、os.endianness()：返回CPU的字节顺序。可取BE或LE
 3、os.hostname()：返回操作系统的主机名
 4、os.type()：返回操作系统的名称
 5、os.platform()：返回操作系统的平台
 6、os.arch()：返回CPU的架构。可取值”x64”,”arm”或”ia32”
 7、os.release()：返回操作系统的发行版本
 8、os.uptime()：返回系统的运行时间
 9、os.loadavg()：返回系统的平均负载
 10、os.totalmem()：返回系统的总内存大小
 11、os.freemem()：返回系统的空闲内存大小
 12、os.cpus()：返回一个包含CPU信息的数组。信息包括型号、速率等
 13、os.networkInterfaces()：获取网络接口信息

 属性
 os.EOL：一个常量，用于定义操作系统的终止标记
 */
var os = require("os");
// 字节顺序
console.log('endianness : ' + os.endianness());
// 操作系统类型
console.log('type : ' + os.type());
// 操作系统平台
console.log('platform : ' + os.platform());
// 内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");
// 空闲内存大小
console.log('free memory : ' + os.freemem() + " bytes.");