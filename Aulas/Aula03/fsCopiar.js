let http = require('http')
let fs = require('fs')

http.createServer(
  function(req, res) {
    fs.readFile('pagina10.html',
      function(erro, dados) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write(dados)

        fs.writeFile('SuperMarioBros.txt', dados,
          function(erro) {
            if(erro)
              throw erro
          }
        )

        res.end();
      }
    )
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar.')