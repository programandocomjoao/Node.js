let http = require('http')
let tempo = require('./tempo')

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-type':'text/html; charset=UTF-8'})

    res.write('<html>')
    res.write('<head>')
    res.write('<title>Aula de Node.js</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Seja bem-vindo(a)</h1>')
    res.write(`<p>Hoje é ${tempo.informarDia()}/${tempo.informarMes()}/${tempo. informarAno()}</p>`)
    res.write(`<p>Nesse momento são ${tempo.informarHora()}:${tempo.informarMinuto()}</p>`)
    res.write('</body>')
    res.write('</html>')

    res.end()
  }
).listen(8080)

console.log('Servidor em operação na porta 8080. Pressione Ctrl + C para encerrar.')