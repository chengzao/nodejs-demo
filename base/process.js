//console.log(process.arch);
// console.log(process.argv);
//console.log(process.version);
//console.log(process.stdout);
// process.stdout.write('\n'); // 输出换行

//process.stdout.write('hello node.js'+ '\n');

function log(str){
	process.stdout.write(str+ '\n');
}
log('this is a demo');