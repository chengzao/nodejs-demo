const http = require("http")

const PORT = 8081
const serverHandle = require('../app')

const server = http.createServer(serverHandle)

server.listen(PORT)
console.log(`server port on ${PORT}`);
