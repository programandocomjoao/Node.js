let http = require('http')
let fs = require('fs')

http.createServer(
  function(req, res) {
    fs.readFile('mobile.html', 
      function(erro, conteudo) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write(conteudo)
        res.end()
      }
    )
  }
).listen(3000)

console.log('Servidor funcionando na porta 3000. Pressione Ctrl + C para derrubar')