let http = require('http')
let url = require('url')

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})

    let endereco = `http://localhost:3000${req.url}`
    let dados = url.parse(endereco, true)
    let aluno = dados.query

    res.write('<html>')
    res.write('<head>')
    res.write('<title>Aula de Node.js</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Aluno de Mobile</h1>')
    res.write(`<p>Matrícula: ${aluno.mat}</p>`)
    res.write(`<p>Nome: ${aluno.nome}</p>`)
    res.write(`<p>Sobrenome: ${aluno.sobrenome}</p>`)
    res.write('</body>')
    res.write('</html>')

    res.end()
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar.')