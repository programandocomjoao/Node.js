let http = require('http')
let fs = require('fs')
let formidable = require('formidable')

http.createServer(
  function(req, res) {
    if(req.url == '/cadastroAnimal') {
      let form = new formidable.IncomingForm()

      form.parse(req,
        function(erro, campos, arquivos) {
          fs.readFile('respostaAnimal.html',
            function(erro, pagina) {
              res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
              res.write(pagina)
              res.end()
            }
          )

          let animal = `${campos.nome} | ${campos.especie} | ${campos.raca}\n`

          fs.appendFile('animais.txt', animal,
            function(erro) {
              if(erro)
                throw erro
            }
          )
        }
      )
    }
    else {
      fs.readFile('cadastroAnimal.html',
        function(erro, pagina) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write(pagina)
          res.end()
        }
      )
    }
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar')