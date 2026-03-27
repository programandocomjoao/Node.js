let http = require('http')
let fs = require('fs')
let formidable = require('formidable')

http.createServer(
  function(req, res) {
    if(req.url == '/script08') {
      let form = new formidable.IncomingForm()

      form.parse(req,
        function(erro, campos, arquivos) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write('<h1>Aluno Cadastrado</h1>')
          res.write(`<p>Nome: ${campos.nome}</p>`)
          res.write(`<p>Sobrenome: ${campos.sobrenome}</p>`)
          res.end()
        }
      )
    }
    else {
      fs.readFile('cadastro08.html',
        function(erro, pagina) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write(pagina)
          res.end()
        }
      )
    }
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar!')