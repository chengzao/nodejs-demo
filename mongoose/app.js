// 引入mongoose库
var mongoose = require('mongoose');
// 连接mongodb
mongoose.connect('mongodb://localhost/nodejs_user', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
// 监听数据库连接成功的事件
db.once('open', () => { console.log('open'); })
// 监听数据库断开连接的事件
db.once('close', () => { console.log('close'); })

// require('./persion')

// require('./animate')

// require('./models.create')
// require('./models.find')
// require('./models.remove')
require('./models.update')
