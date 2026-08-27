let http = require('http')
let url = require('url')
let fs = require('fs')

http.createServer(
  function(req, res) {
    let arquivo = '.' + req.url

    fs.readFile(arquivo,
      function(erro, conteudo) {
        if(erro) {
          res.writeHead(404, {'Content-Type':'text/html; charset=UTF-8'})
          res.write('<h1>Erro 404</h1>')
          res.write('<p>Page Not Found (Página não encontrada)</p>')
          res.end()
        }
        else {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write(conteudo)
          res.end()
        }
      }
    )
  }
).listen(3000)

console.log('Servidor rodando na porta 3000. Pressione Ctrl + C para derrubar!')