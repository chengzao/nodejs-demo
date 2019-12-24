const hello = require('../mock/hello')

module.exports =  app => {

  const router = require('express').Router()
  router.get('/mockjs/hello', async (req, res) => {
    res.json({res: hello})
  })
    // 创建资源
  router.post('/mockjs/:id', async (req, res) => {
    res.send({'res': 'post: '+req.params.id})
  })
  // 更新资源
  router.put('/mockjs/:id', async (req, res) => {
    res.send({'res': 'put: '+req.params.id})
  })
  // 删除资源
  router.delete('/mockjs/:id', async (req, res) => {
    res.send({
      'res': 'delete: '+req.params.id
    })
  })
 app.use('/api', router)
}
