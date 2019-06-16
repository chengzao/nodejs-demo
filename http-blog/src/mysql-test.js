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

// sql query
const sql = 'select * from users;'
con.query(sql, (err, result) => {
  if(err){
    console.log(err);
    return
  }
  console.log('result: ', result)
})

// closed
con.end()
