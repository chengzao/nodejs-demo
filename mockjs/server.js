const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))

// require api
require('./routes/index')(app)
// listen port
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
