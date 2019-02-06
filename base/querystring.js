var querystring = require('querystring');
console.log(querystring);

// stringify
var str = querystring.stringify({'name':'aaa',age:10,form:''},':');
var str2 = querystring.stringify({'name':'aaa',age:10,form:''},',',':');
console.log(str)  // ==> name=aaa:age=10:form=
console.log(str2) // ==> name:aaa,age:10,form:
// parse


// escape    querystring.escape('哈哈') ==> '%u54C8%u54C8'
// unescape