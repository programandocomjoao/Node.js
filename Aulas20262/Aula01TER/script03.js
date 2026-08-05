let http = require('http')
let data = require('./data')

http.createServer(
  function(req, res) {
    let d = data.retornarDia() + '/' + data.retornarMes() + '/' + data.retornarAno()
    let h = data.retornarHoras() + ':' + data.retornarMinutos()

    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Mobile</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Seja Bem-Vindo(a)!</h1>')
    res.write(`<p>Data de hoje: ${d}</p>`)
    res.write(`<p>No momento é: ${h}</p>`)
    res.write('</body>')
    res.write('</html>')
    res.end()
  }
).listen(3000)

console.log('Servidor rodando na porta 3000. Pressione Ctrl + C para derrubar')