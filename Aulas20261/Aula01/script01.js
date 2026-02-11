let http = require('http')

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain; charset=UTF-8'})
    res.write('Desenvolvimento Mobile no Coração!')
    res.end()
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar.')