let http = require('http')
let url = require('url')
let fs = require('fs')

http.createServer(
  function(req, res) {
    let endereco = 'http://localhost:3000' + req.url
    let dados = url.parse(endereco, true)
    let campos = dados.query
    let game = `${campos.ano} | ${campos.titulo}\n`

    fs.appendFile('games.txt', game,
      function(erro) {
        if(erro)
          throw erro
        else
          console.log('Arquivo atualizado com sucesso!')
      }
    )

    fs.readFile('respostaGame.html',
      function(erro, conteudo) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write(conteudo)
        res.end()
      }
    )
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar!')