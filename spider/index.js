// 通过request模块来向一个网址发送一个请求，得到该网址的html字符

var request = require('request');
var cheerio = require('cheerio');

var url = 'http://blog.sina.com.cn/s/articlelist_2391731143_0_1.html';

// request 包可以通过指定一个url地址，得到一个网页的源代码（html）
// body里面就是html字符串
request(url, function(error, response, body) {
  // 通过 cheerio 将返回的html字符串加载为一个类似于jQuery的对象，方便操作
  // 注意：decodeEntities 属性要设置为false，默认为true（会对中文进行编码）
  var $ = cheerio.load(body, {
    decodeEntities: false
  });

  // 使用jQuery语法，将需要的元素筛选出来
  var $lis = $('#module_7 ul').first().find('li').slice(1);

  var result = [];

  $lis.each(function(index, ele) {
    var $this = $(ele);
    var categoryName = $this.find('a').text();
    result.push(categoryName);
  });

  console.log(result);

});

