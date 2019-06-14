var Tank = require('./model/Tank')


// 方式一
// var small = new Tank({ name: 'aaa', size: 'small' });
// small.save(function (err, res) {
//   if (err) console.log(err);
//   console.log('saved', res);
// })

// 方式二
// Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);
Tank.find({ size: 'small' }, (err, res) => {
  if (err) console.error(err)
  console.log('find', res);
})


Tank.find({}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})


// Model.findById(id, [projection], [options], [callback]) ；
// Model.findOne([conditions], [projection], [options], [callback]) ；
