const { escape } = require('../db/mysql')

// /api/user/login
const login = (user, pwd) => {
  user = escape(user)
  pwd = escape(user)
  if(user == 'zhangsan' && pwd == '123'){
    return true
  }else{
    return false
  }
}
// /api/user/logout
const logout = (user, pwd) => {
  if (user == 'zhangsan' && pwd == '123') {
    return true
  } else {
    return false
  }
}
// /api/user/create
const create = (user, pwd) => {
  console.log(user, pwd);
  return true
}

module.exports = {
  login,
  logout,
  create
}
