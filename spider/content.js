var request = require('request');
var cheerio = require('cheerio');

var url = 'http://blog.sina.com.cn/s/blog_8e8eebc70102w80n.html';

request(url,function (error,response,body) {
  
  var $ = cheerio.load(body,{
    decodeEntities: false
  });

  var content = $('#sina_keyword_ad_area2').html();

  console.log(content);

});
