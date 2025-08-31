let http = require('http')
let fs = require('fs')

http.createServer(
  function(req, res) {
    fs.readFile('supermariobros.html',
      function(erro, dados) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write(dados)
        res.end();
      }
    )
  }
).listen(8080)

console.log('Servidor em operação na porta 8080. Pressione Ctrl + C para derrubar.')