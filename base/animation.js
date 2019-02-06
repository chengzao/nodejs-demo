'use strict';

var frames=[];
frames.push(`
╭~~~╮
(o^.^o)
`);

frames.push(`
╭~~~╮
(o~.~o)
`);

frames.push(`
╭~~~╮
(o@.@o)
`);

frames.push(`
╭ ﹌╮
(o'.'o)
`);

var count = 0;
setInterval(function(){
    // 先清屏
 	process.stdout.write('\u001b[2J\u001b[0;0H');	
	
	count++;

	count = count === frames.length ? 0:count;

	process.stdout.write(frames[count]);

},1000/15);

