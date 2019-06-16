const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'czh',
  password: 'admin@!123',
  port: '3306',
  database: 'myblog'
})

// connect
con.connect()

// exec sql
function exec(sql){
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}

module.exports = {
  exec,
  escape: mysql.escape
}
