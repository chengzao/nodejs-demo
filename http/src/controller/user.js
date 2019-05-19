const login = (user, pwd) => {
  if(user == 'zhangsan' && pwd == '123'){
    return true
  }else{
    return false
  }
}

module.exports = {
  login
}
