let http = require('http')

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain; charset=UTF-8'})
    res.end('Serviço iniciado')
  }
).listen(8080)

console.log('Servidor em operação na porta 8080. Pressione Ctrl + C para encerrar.')