let http = require('http')
let fs = require('fs')
let formidable = require('formidable')

http.createServer(
  function(req, res) {
    if(req.url == '/script11') {
      let form = new formidable.IncomingForm()

      form.parse(req,
        function(erro, campos, arquivos) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write('<h1>Game Cadastrado</h1>')
          res.write(`<p>O game ${campos.game} foi cadastrado com sucesso.</p>`)

          fs.appendFile('games.txt', `${campos.game}\n`,
            function(erro) {
              if(erro) 
                throw erro
              else
                console.log('Arquivo atualizado com sucesso!')
            }
          )

          res.end()
        }
      )
    }
    else {
      res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
      res.write('<h1>Cadastro de Games</h1>')
      res.write('<form action="script11" method="post" enctype="multipart/form-data">')
      res.write('<p>Game: <input type="text" size="30" name="game">')
      res.write('<input type="submit" value="Cadastrar"></p>')
      res.write('</form>')
      res.end()
    }
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar')