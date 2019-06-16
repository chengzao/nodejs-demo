const redis = require('redis')

const redisClient = redis.createClient(6379, '127.0.0.1')

redisClient.on('error', err => {
  console.log(err)
})

// set val
redisClient.set('nodejs', 'redis nodejs test', redis.print)

// get val
redisClient.get('nodejs', (err, val) => {
  if(err){
    console.log(err)
    return
  }
  console.log('val: ', val)

  // exit
  redisClient.quit()
})
