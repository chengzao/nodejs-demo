const redis = require('redis')

const redisClient = redis.createClient(6379, '127.0.0.1')

redisClient.on('error', err => {
  console.log(err)
})

// set val
function set(key, val){
  if(typeof val === 'object'){
    val = JSON.stringify(val)
  }
  redisClient.set(key, val, redis.print)
}

// get val
function get(key){
  return new Promise((reslove, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }

      if(val == null){
        reslove(null)
        return
      }

      try {
        reslove(JSON.parse(val))
      } catch (error) {
        reslove(val)
      }
    })
  })

}

module.exports = {
  set,
  get
}
