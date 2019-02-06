'use strict';

const path = require('path');

module.exports = {
  port: 3000,
  host: '127.0.0.1',
  albumPath:path.join(__dirname,'album'),
  uploadTmpPath:path.join(__dirname,'uploads')
};
