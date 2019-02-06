var fs = require('fs');

var os = require('os');

var args =process.argv.slice(2);

var tmpDir = os.tmpdir();
// 获取计算机用户名
var userName = tmpDir.split('\\')[2];
// 得到用户输入的数据
var count = args[0];

//  ${name}  es6中字符串模版拼接的变量写法

var initContent = `
/**
 * Create by ${userName} on ^data^
 */
`;

for (var i = 0; i < count; i++) {
	var filepath = './'+(i+1)+'.js';
	var curDate=(function(){
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		return `${year}年${month}月${day}日`;
	})();
	// 替换字符串中的 ^data^
	var content = initContent.replace('^data^',curDate);
	// 写入文件名 和 文件内容
	fs.writeFileSync(filepath,content);
	console.log('第'+(i+1)+'文件创建成功！');
}