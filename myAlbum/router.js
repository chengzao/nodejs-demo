'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const config = require('./config');

// 一个用来处理文件上传的第三方包
const formidable = require('formidable');

const router = express.Router();

// GET / 渲染首页
router.get('/', (req, res) => {

  fs.readdir(config.albumPath, (err, files) => {
    if (err) {
      return res.send(err.message);
    }

    let albums = [];
    // 以下代码可能有问题
    files.forEach((item) => {
      fs.stat(path.join(config.albumPath, item), (err, stats) => {
        if (err) {
          return res.send(err.message);
        }
        if (stats.isDirectory()) {
          albums.push(item);
        }
      });
    });

    res.render('index', {
      albums
    });
  });
});

router.get('/album/add', (req, res) => {
  let albumName = req.query.albumName;
});

router.get('/:albumName', (req, res) => {
  let albumName = req.params.albumName;

  // 根据该项目名称，读取该目录下所有的图片，渲染到客户端
  let fullPath = path.join(config.albumPath, albumName);

  fs.readdir(fullPath, (err, files) => {
    let imgSrcs = [];

    if (err) {
      return res.send(err.message);
    }

    files.forEach((item) => {
      let stats = fs.statSync(path.join(fullPath, item));
      if (stats.isFile()) {
        imgSrcs.push(`/album/${albumName}/${item}`);
      }
    });
    res.render('album', {
      imgSrcs,
      albumName
    });
  });
});

router.post('/:albumName', (req, res) => {
  let albumName = req.params.albumName;

  // new 一个 上传处理对象
  let form = new formidable.IncomingForm();

  form.uploadDir = config.uploadTmpPath;

  form.parse(req, function(err, fields, files) {
    if (err) {
      return res.send(err.message);
    }

    let pic = files.pic;
    let tmpPath = pic.path;
    let baseName = path.basename(tmpPath);
    let extName = path.extname(pic.name);

    if (!['.jpg', '.png', '.jpeg', '.gif', '.bmp'].find(e => e == extName)) {
      return res.send('不支持该类型格式');
    }

    let size = pic.size;

    if (size > 1024 * 1024 * 1024 * 1024) {
      return res.send('本次文件太大了');
    }

    // 要将临时目录中的文件移动到指定的目录中
    let newPath = path.join(config.albumPath, albumName, `${baseName}${extName}`)

    // 最后通过 fs 模块的 rename  方法实现移动文件
    fs.rename(tmpPath, newPath, () => {

      res.redirect('back');
    });
  });
});

module.exports = router;