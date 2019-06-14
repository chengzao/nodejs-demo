var Tank = require('./model/Tank')


// 方式一
// var small = new Tank({ name: 'aaa', size: 'large' });
// small.save(function (err, res) {
//   if (err) console.log(err);
//   console.log('saved', res);
// })

// 方式二
Tank.remove({ size: 'small' }, function (err, res) {
  if (err) console.error(err)
  console.log('remove', res);
});
