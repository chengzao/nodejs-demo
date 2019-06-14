var mongoose = require('mongoose')

var Schema = mongoose.Schema;

// 定义一个schema
var persionSchema = new Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    default: 'female' // 默认值
  }
})
// 实例方法（method）：挂在方法到document上使用
persionSchema.methods.speak = function () {
  var greeting = this.name
    ? "My name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

// 创建一个 model
var Persion = mongoose.model('persion', persionSchema);

module.exports = Persion
