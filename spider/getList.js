var request = require('request');
var cheerio = require('cheerio');

function getArticleList(url,callback) {

  // 在异步代码中，无法return，是得不到return的返回值的
  request(url, function(error, response, body) {

    var $ = cheerio.load(body, {
      decodeEntities: false
    });
    var $atc_titles = $('.articleList .articleCell .atc_title a');

    var articleList = [];

    $atc_titles.each(function(index, ele) {
      var $this = $(ele);

      var obj = {
        title: $this.text(),
        url: $this.attr('href')
      };

      articleList.push(obj);
    });
    callback(articleList);
  });
}

var url = 'http://blog.sina.com.cn/s/articlelist_2391731143_0_1.html';
getArticleList(url,function (articleList) {
  console.log(articleList);
});
