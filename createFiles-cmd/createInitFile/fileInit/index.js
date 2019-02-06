"use strict";

const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);
const command = args[0];
const CreateFile = require('./commands/init');
const filenameUrl = CreateFile.filename;
const init = CreateFile.init;
const filename = path.parse(filenameUrl)['base'];

if (!command) {
 return console.log(`
 init: 创建web文件夹,
 文件包涵：
 html img css  js  index.html 404.html
 `);
}


switch (command) {
  case 'init':
    fs.exists(filename,function(exists){
    	if(exists){
    		console.log('文件已存在');
    	}else{
    		init();
    		console.log('文件创建成功');
    	}
    });
    break;
  case '-v':
    console.log('版本');
    break;
  case '-h':
    console.log('帮助信息');
    break;
}

// 如果是init，初始化项目结构

// 如果是-v，输出项目的版本

// 如果是或者-h  输出工具的帮助信息
