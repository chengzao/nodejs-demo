var _ = require('lodash')
var R = require('ramda')

var log = console.log

// var log = (...arg) => console.log.apply(console, arg)

// var max = (...arg) => Math.max.apply(Math, arg)

var {max} = Math;

log(max(1,12,3))

log(_.compact([0, 1, false, 2, '', 3]))

log(R.add(7)(10))
