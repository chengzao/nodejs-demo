'use strict';
// npm install cheerio
var cheerio = require('cheerio'),
    $ = cheerio.load(`
      <ul class="projects">
          <li class="project jquery"><a href="http://jquery.com/" title="jQuery">jQuery</a></li>
          <li class="project jquery-ui"><a href="http://jqueryui.com/" title="jQuery UI">jQuery UI</a></li>
          <li class="project jquery-mobile"><a href="http://jquerymobile.com/" title="jQuery Mobile">jQuery Mobile</a></li>
          <li class="project sizzlejs"><a href="http://sizzlejs.com/" title="Sizzle">Sizzle</a></li>
          <li class="project qunitjs"><a href="http://qunitjs.com/" title="QUnit">QUnit</a></li>
        </ul>
      `);

$('li a').each(function (i,elem) {
  console.log($(this).text());
});
