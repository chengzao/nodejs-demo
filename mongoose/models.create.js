var Tank = require('./model/Tank')


// 方式一
var small = new Tank({ name: 'aaa', size: 'small' });
small.save(function (err, res) {
  if (err) console.log(err);
  console.log('saved', res);
})

// 方式二
Tank.create({ name: 'bbb', size: 'big' }, function (err, res) {
  if (err) return console.log(err);
  console.log('saved', res);
})
