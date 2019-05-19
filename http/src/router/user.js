const { login } = require('../controller/user')
const { SuccessModal, ErrorModal } = require('../module/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method

  const url = req.url
  const path = url.split('?')[0]

  if (method === 'POST' && path === '/api/user/new') {
    const {user, pwd} = req.body
    const res = login(user, pwd)

    if(res){
      return new SuccessModal()
    }else{
      return new ErrorModal()
    }
  }


}

module.exports = handleUserRouter
