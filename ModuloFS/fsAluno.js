let http = require('http')
let url = require('url')
let fs = require('fs')

http.createServer(
  function(req, res) {
    let aluno = url.parse(req.url, true).query
    let registro = `Matrícula: ${aluno.mat} | Nome: ${aluno.nome} ${aluno.sobrenome}\n`

    fs.appendFile('alunos.txt', registro,
      function(erro) {
        if(erro)
          throw erro
      }
    )

    fs.readFile('respostaAluno.html',
      function(erro, dados) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write(dados)
        res.end()
      }
    )
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar')