/*
 * 项目结构初始化处理函数
 * */
"use strict";

const fs = require('fs');
const path = require('path');
const config = require('../config');

const structure = config.structure;

const rootName = './' + structure.name;

module.exports.init = function () {
  if (structure.name) {
    fs.mkdir(rootName, function () {
      // 遍历 fileData ，如果是目录，创建目录，如果是文件，创建文件
      structure.fileData.forEach(function (item) {
        if (item.type === 'dir') {
          fs.mkdir(rootName + '/' + item.name);
        } else if (item.type === 'file') {
          fs.writeFile(rootName + '/' + item.name, item.content);
        }
      });
    });
  }
};

module.exports.filename = rootName;
