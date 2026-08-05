let http = require('http')

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain; charset=UTF-8'})
    res.end('O servidor Node.js está funcionado!')
  }
).listen(3000)

console.log('Servidor rodando na porta 3000. Pressione Ctrl + C para derrubar')