/**
 * Buffer
 */

//创建Buffer对象
var buf = new Buffer(10);
var buf = new Buffer([10, 20, 30, 40, 50]);
var buf = new Buffer("gbtags", "utf-8");

//写入Buffer对象
/*
* buf.write(string[, offset][, length][, encoding])

 1、string：指定写入buffer对象的字符串

 2、offset：指定写入buffer对象的起始位置。默认取值为0

 3、length：指定写入的字节个数。默认是buffer.length

 4、encoding：指定编码方式，默认为”utf-8”
*
* */
var buf1 = new Buffer(256);
len1 = buf1.write("gbtags");
console.log("Octets written : "+  len1); //Octets written : 6

//读取Buffer对象
/*
* buf.toString([encoding][, start][, end])

 1、encoding：编码方式，默认为uft-8

 2、start：读取的起始编号，默认为0

 3、end：读取的结尾编号，默认为整个buffer对象
*
* */

var buf2 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf2[i] = i + 97;
}
console.log( buf2.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf2.toString('ascii',0,5));   //输出: abcde
console.log( buf2.toString('utf8',0,5));    //输出: abcde
console.log( buf2.toString(undefined,0,5)); // 以'utf8'方式编码， 输出abcde

//将Buffer转化为JSON形式
var buf3 = new Buffer('Simply Easy Learning');
var json = buf3.toJSON(buf3);
console.log(json);

//联合Buffer对象
var buffer1 = new Buffer('极客标签是什么？');
var buffer2 = new Buffer('一款轻量级注重实战互动学习的在线编程自学和直播平台');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3的内容: " + buffer3.toString());

//比较Buffer对象
var buffer11 = new Buffer('ABC');
var buffer22 = new Buffer('ABCD');
var result = buffer11.compare(buffer22);
if (result < 0) {
  console.log(buffer11 + "在" + buffer22 + "之前");
} else if (result == 0) {
  console.log(buffer11 + "和" + buffer22 + "相同");
} else {
  console.log(buffer11 + "在" + buffer22 + "之后");
}

//复制Buffer对象
/*
* buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd]);
 1、targetBuffer：复制操作的目标Buffer对象

 2、targetStart：目标Buffer对象的复制起始位置，非必须，默认为0

 3、sourceStart：源Buffer对象的复制起始位置，非必须，默认为0

 4、sourceEnd：源Buffer对象的复制结束位置，非必须，默认为buf.length
* */

var buffer111 = new Buffer('ABC');
var buffer222 = new Buffer(3);
buffer111.copy(buffer222);
console.log("buffer2的内容：" + buffer222.toString());

//分割Buffer对象
/*
* buf.slice([start][, end])
 1、start：分割起始位置，数字，默认为0。

 2、end：分割结束位置，数字，默认为buf.length
* */

var buffer1111 = new Buffer('gbtags');
var buffer2222 = buffer1111.slice(0,5);
console.log("buffer2的内容：" + buffer2222.toString());

//Buffer对象的长度
var buffer = new Buffer('gbtags');
console.log("buffer length: " + buffer.length);
