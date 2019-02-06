// 解压
var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');

var password = new Buffer(process.env.PASS || 'password');
var decryptStream = crypto.createDecipher('aes-256-cbc', password);

var gzip = zlib.createGunzip();
var readStream = fs.createReadStream(__dirname + '/out.gz');

readStream // reads current file
    .pipe(gzip) // uncompresses
    .pipe(decryptStream) // decrypts
    .pipe(process.stdout) // writes to terminal
    .on('finish', function() { // finished
        console.log('done');
    });

// 压缩
var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');

var password = new Buffer(process.env.PASS || 'password');
var encryptStream = crypto.createCipher('aes-256-cbc', password);

var gzip = zlib.createGzip();
var readStream = fs.createReadStream(__dirname + "/readMe.txt"); // current file
var writeStream = fs.createWriteStream(__dirname + '/out.gz');

readStream // reads current file
    .pipe(encryptStream) // encrypts
    .pipe(gzip) // compresses
    .pipe(writeStream) // writes to out file
    .on('finish', function() { // all done
        console.log('done');
    });


// 流和管道
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// 设置编码
myReadStream.setEncoding('utf8');

// 1
myReadStream.pipe(myWriteStream);

// 2
var writeData = "hello world";
myWriteStream.write(writeData);
myWriteStream.end();
myWriteStream.on('finish', function() {
    console.log('finished');
})


// 3
var data = ""

myReadStream.on('data', function(chunk) {
    // 3.1
    // data += chunk;

    // 3.2
    myWriteStream.write(chunk);
})

myReadStream.on('end', function() {
    // console.log(data);
})