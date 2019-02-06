'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const mimeObj = fs.readFileSync(path.join(__dirname, 'mime.txt'), 'utf8');
http.createServer((req, res) => {

    // 获取当前http
    let url = req.url;

    if (url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                return res.end(err.message);
            }
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            });
            res.end(data);
        });
    } else if (url === '/favicon.ico') {
        res.end();
    } else if (url.startsWith('/www')) {
        let fullPath = path.join(__dirname, url);
        fs.readFile(fullPath, (err, data) => {
            if (err) {
                return res.end(err.message);
            }

            // getMime(fullPath, (err, mime) => {
            //     res.writeHead(200, {
            //         'Content-Type': mime
            //     });
            //     res.end(data);
            // });
            getMime2(fullPath, (err, mime) => {
                res.writeHead(200, {
                    'Content-Type': mime
                });
                res.end(data);
            });         
        });
    }

}).listen(3000, '127.0.0.1', () => {
    console.log('server is running at port 3000');
});

/**
 * [getMime 传入一个文件路径，根据该文件后缀名获取该文件类型对应的Content-Type类型]
 * @param  {[String]}   filePath [文件路径]
 * @param  {Function}   callback [执行成功之后的回调函数]
 * @return {[]}         [undefined]
 */
function getMime(filePath, callback) {
    fs.readFile(path.join(__dirname, 'mime.txt'), 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        console.log(data);
        // 转换为json
        let jsonObj = JSON.parse(data);
        // 获取文件后缀名
        let extName = path.extname(filePath);

        let mime = jsonObj[extName] ? jsonObj[extName] : 'text/plain';

        callback(null, mime);
    });
}


function getMime2(filePath,callback) {
    const jsonObj = JSON.parse(mimeObj);
    let extName = path.extname(filePath);
    let mine = jsonObj[extName] ? jsonObj[extName] : 'text/plain';
    callback(null,mine);
}
