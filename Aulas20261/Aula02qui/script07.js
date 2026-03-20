let http = require('http')
let fs = require('fs')

http.createServer(
  function(req, res) {
    fs.readFile('pagina07.html',
      function(erro, conteudo) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write(conteudo)
        res.end()
      }
    )
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressiona Ctrl + C para derrubar.')