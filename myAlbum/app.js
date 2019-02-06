'use strict';

const express = require('express');
// 项目的配置文件，把一些经常变化的东西放到配置文件中
const config = require('./config');
const router = require('./router');

const app = express();

// 把 bower_components 目录设置为一个静态资源服务
app.use('/bower_components',express.static('bower_components'));
// 静态资源服务可以设置多个
app.use('/www',express.static('www'));
app.use('/album',express.static('album'));

// 设置模板引擎，使用handlebars 模板引擎
app.set('view engine','hbs');

// 挂载路由容器到app实例上
app.use(router);

app.listen(config.port, config.host, () => {
  console.log('server is runnig at port 3000');
});
