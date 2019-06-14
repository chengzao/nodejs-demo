var Persion = require('./model/Persion')

// documents 是 Models 的实例
var p1 = new Persion({ name: 'aaa', age: 12, gender: "1" });

// 保存数据
p1.save(function (err, res) {
  if (err) return console.error(err);
  res.speak();
});
