// ＃生成私钥key文件
// openssl genrsa 1024 > /path/to/private.pem
// 
// ＃通过私钥文件生成CSR证书签名
// openssl req -new -key /path/to/private.pem -out csr.pem
// 
// ＃通过私钥文件和CSR证书签名生成证书文件
// openssl x509 -req -days 365 -in csr.pem -signkey /path/to/private.pem -out /path/to/file.crt

var app = require('express')();
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./key/private.pem', 'utf8'),
    certificate = fs.readFileSync('./key/file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var PORT = 18080;
var SSLPORT = 18081;

httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

// Welcome
app.get('/', function(req, res) {
    if(req.protocol === 'https') {
        res.status(200).send('Welcome to Safety Land!');
    }
    else {
        res.status(200).send('Welcome!');
    }
});
