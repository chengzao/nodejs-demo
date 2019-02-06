var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = 'http://blog.sina.com.cn/s/articlelist_2391731143_0_1.html';

var templateStr = fs.readFileSync('./template.html').toString();

request(url, function(error, response, body) {

  var $ = cheerio.load(body, {
    decodeEntities: false
  });


  var $atc_titles = $('.articleList .articleCell .atc_title a');

  var articleList = [];

  $atc_titles.each(function(index, ele) {
    var $this = $(ele); // 将普通的对象转换为类似于jQuery的对象

    var obj = {
      title: $this.text(), // 获取当前遍历元素的文本值
      url: $this.attr('href') // 获取当前遍历元素的 href 属性
    };

    articleList.push(obj);

  });


  articleList.forEach(function(item, index) {

    request(item.url, function(error, response, body) {
      var $ = cheerio.load(body, {
        decodeEntities: false
      });

      var title = item.title;

      var content = $('#sina_keyword_ad_area2').html();
      var temps='';
      // 替换title
      temps = templateStr.replace('{{title}}', title);

      // 替换正文内容
      temps = temps.replace('{{content}}', content);

      // writeFileSync 没有返回值
      fs.writeFileSync('./article/' + title + '.html', temps);
      console.log(index);
    });
  });
});


