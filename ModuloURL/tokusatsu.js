let http = require('http')
let url = require('url')
let fs = require('fs')

http.createServer(
  function(req, res) {
    let dados = url.parse(req.url, true)
    let arquivo = `.${dados.pathname}`

    fs.readFile(arquivo,
      function(erro, pagina) {
        if(erro) {
          res.writeHead(404, {'Content-Type':'text/html; charset=UTF-8'})
          res.write('<h1>Erro 404</h1>')
          res.write(`<p>A página ${dados.pathname} não foi encontrada.</p>`)
          res.end()
        }
        else {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write(pagina)
          res.end()
        }
      }
    )
  }
).listen(8080)

console.log('Servidor em operação na porta 8080. Pressione Ctrl + C para derrubar')