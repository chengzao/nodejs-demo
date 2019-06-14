var mongoose = require('mongoose')

var Schema = mongoose.Schema;

// define a schema
var Tank = new Schema({ name: String, size: String });


module.exports = mongoose.model('tank', Tank);
