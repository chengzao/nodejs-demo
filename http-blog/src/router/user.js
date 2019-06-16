const { login, logout, create } = require('../controller/user')
const { SuccessModal, ErrorModal } = require('../module/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method

  const url = req.url
  const path = url.split('?')[0]
  // login user
  if (method === 'POST' && path === '/api/user/login') {
    const {user, pwd} = req.body
    const res = login(user, pwd)
    // check login
    if(res){
      return new SuccessModal()
    }else{
      return new ErrorModal()
    }
  }
  // logout user
  if (method === 'POST' && path === '/api/user/logout') {
    const {user, pwd} = req.body
    const res = logout(user, pwd)

    if(res){
      return new SuccessModal()
    }else{
      return new ErrorModal()
    }
  }
  // create user
  if (method === 'POST' && path === '/api/user/create') {
    const {user, pwd} = req.body
    const res = create(user, pwd)

    if(res){
      return new SuccessModal({
        user,
        pwd
      })
    }else{
      return new ErrorModal()
    }
  }


}

module.exports = handleUserRouter
