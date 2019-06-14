var Tank = require('./model/Tank')

// 方式一
// var tank = new Tank();
// tank.find({ name: 'aaa' }, (err, res) => {
//   if (err) console.error(err)
//   console.log('update', res);
// })

// 方式二

Tank.updateOne({ name: 'updateMe' }, { name: "aaa" }, (err, res) => {
  if (err) console.error(err)
  console.log('update', res);
})
