let http = require('http')
let url = require('url')
let fs = require('fs')

http.createServer(
  function(req, res) {
    let dados = url.parse(req.url, true)
    let arquivo = '.' + dados.pathname

    fs.readFile(arquivo,
      function(erro, pagina) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write(pagina)
        res.end()
      }
    )
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar.')