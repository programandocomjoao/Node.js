let http = require('http')
let tempo = require('./tempo')

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Mobile</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Aula de Mobile</h1>')
    res.write(`<p>Data: ${tempo.informarDia()}/${tempo.informarMes()}/${tempo.informarAno()} </p>`)
    res.write(`<p>Hora: ${tempo.informarHoras()}:${tempo.informarMin()}:${tempo.informarSeg()} </p>`)
    res.write('</body>')
    res.write('</html>')
    res.end()
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar!')