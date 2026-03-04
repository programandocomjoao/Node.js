let http = require('http')
let url = require('url')

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})

    let endereco = 'http://localhost:3000' + req.url
    let dados = url.parse(endereco, true)
    let campos = dados.query

    res.write('<html>')
    res.write('<head>')
    res.write('<title>Mobile</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Aluno de Mobile</h1>')
    res.write(`<p>Nome: ${campos.nome}</p>`)
    res.write(`<p>Sobrenome: ${campos.sobrenome}</p>`)
    res.write(`<p>Nome completo: ${campos.nome} ${campos.sobrenome}</p>`)
    res.write('</body>')
    res.write('</html>')
    res.end()
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar.')