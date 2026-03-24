let http = require('http')
let fs = require('fs')
let formidable = require('formidable')

http.createServer(
  function(req, res) {
    if(req.url == '/scriptConsole') {
      let form = new formidable.IncomingForm()

      form.parse(req,
        function(erro, campos, arquivos) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write('<h1>Console Cadastrado</h1>')
          res.write(`<p>Ano: ${campos.ano}</p>`)
          res.write(`<p>Descrição: ${campos.descricao}</p>`)
          res.end()
        }
      )
    }
    else {
      fs.readFile('cadastroConsole.html',
        function(erro, pagina) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write(pagina)
          res.end()
        }
      )
    }
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar.')