let http = require('http')
let fs = require('fs')
let formidable = require('formidable')

http.createServer(
  function(req, res) {
    if(req.url == '/cadastroTurma') {
      let form = new formidable.IncomingForm()

      form.parse(req,
        function(erro, campos, arquivos) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write('<h1>Turma Cadastrada</h1>')
          res.write(`<p>Descrição: ${campos.descricao}</p>`)
          res.write(`<p>Disciplina: ${campos.disciplina}</p>`)
          res.write(`<p>Ementa: ${arquivos.ementa}</p>`)
          res.end()
        }
      )
    }
    else {
      fs.readFile('cadastroTurma.html',
        function(erro, conteudo) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write(conteudo)
          res.end()
        }
      )
    }
  }
).listen(3000)

console.log('Servidor rodando na porta 3000. Pressione Ctrl + C para derrubar!')