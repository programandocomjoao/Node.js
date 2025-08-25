let http = require('http')
let url = require('url')
let fs = require('fs')

http.createServer(
  function(req, res) {
    let endereco = url.parse(req.url, true)
    let arquivo = `.${endereco.pathname}`

    fs.readFile(arquivo,
      function(erro, dados) {
        if(erro) {
          res.writeHead(404, {'Content-Type':'text/html; charset=UTF-8'})
          res.write('<h1>Erro 404</h1>')
          res.write(`<p>A página ${endereco.pathname} não foi encontrada.</p>`)
          res.end()
        }
        else {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write(dados)
          res.end()
        }
      }
    )
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar')