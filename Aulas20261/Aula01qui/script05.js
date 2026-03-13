let http = require('http')
let url = require('url')

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})

    let endereco = 'http://localhost:3000' + req.url
    let dados = url.parse(endereco, true)

    res.write('<html>')
    res.write('<head>')
    res.write('<title>Mobile</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Dados do Endereço</h1>')
    res.write(`<p>Endereço completo: ${endereco}</p>`)
    res.write(`<p>Domínio principal: ${dados.host}</p>`)
    res.write(`<p>Subdomínio/pasta: ${dados.pathname}</p>`)
    res.write(`<p>Parâmetros: ${dados.search}</p>`)
    res.write('</body>')
    res.write('</html>')
    res.end()
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar!')