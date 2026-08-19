let http = require('http')
let url = require('url')
let fs = require('fs')

http.createServer(
  function(req, res) {
    let dados = url.parse(req.url, true)
    let campos = dados.query

    let registro = `${campos.ano} | ${campos.descricao}\n`

    fs.appendFile('consoles.txt', registro,
      function(erro) {
        if(erro)
          throw erro
        else
          console.log('Console cadastrado com sucesso!')
      }
    )

    fs.readFile('respostaConsoles.html',
      function(erro, resposta) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write(resposta)
        res.end()
      }
    )
  }
).listen(3000)

console.log('Servidor rodando na porta 3000. Pressione Ctrl + C para derrubar')