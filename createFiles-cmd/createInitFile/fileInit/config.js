"use strict";

const fs = require('fs');
const path = require('path');

exports.structure = {
  name: 'web',
  fileData: [
    {
      name: 'css',
      type: 'dir'
    },
    {
      name: 'js',
      type: 'dir'
    },
    {
      name: 'img',
      type: 'dir'
    },
    {
      name: 'index.html',
      type: 'file',
      content: fs.readFileSync(path.join(__dirname, 'index.html'))
    },
    {
      name: '404.html',
      type: 'file',
      content: fs.readFileSync(path.join(__dirname, '404.html'))
    }
  ]
};