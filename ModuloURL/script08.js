let http = require('http')
let url = require('url')

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})

    let endereco = `http://localhost:8080${req.url}`
    let dados = url.parse(endereco, true)

    res.write('<h1>Barra de Endereço</h1>')
    res.write(`<p>Endereço completo: ${endereco}</p>`)
    res.write(`<p>Domínio principal: ${dados.host}</p>`)
    res.write(`<p>Subdomínio: ${dados.pathname}</p>`)
    res.write(`<p>Parâmetros: ${dados.search}</p>`)

    res.end()
  }
).listen(8080)

console.log('Servidor em operação na porta 8080. Pressione Ctrl + C para derrubar.')