'use strict';

var fs = require('fs');
var path = require('path')
function parseToJson(str,callback){
	process.nextTick(()=>{
		try{
			var jsonObj = JSON.parse(str);
			callback(null,jsonObj);
		}catch(e){
			callback(new Error('JSON格式错误！！！'),null);
		}
	});
}

let jsonStr= '{"foo":"bar"bbbb}';

parseToJson(jsonStr,(err,jsonObj)=>{
	if(err){
		return fs.writeFileSync(path.join(__dirname,'/log.txt'),err);
	}
	console.log(jsonObj);
});

console.log(__dirname);  //E:\web\nodejs\demo1
console.log(__filename); //E:\web\nodejs\demo1\parseToJson.js
console.log(module.paths);
// [ 'E:\\web\\nodejs\\demo1\\node_modules',
//   'E:\\web\\nodejs\\node_modules',
//   'E:\\web\\node_modules',
//   'E:\\node_modules' ]