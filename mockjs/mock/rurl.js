var Mock = require('mockjs')
var data = Mock.mock('/api/mockjs/hello', {
    'list|1-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
})
module.exports = data
