let http = require('http')
let data = require('./data')

http.createServer(
  function(req, res) {
    let d = `${data.getDia()}/${data.getMes()}/${data.getAno()}`
    let h = `${data.getHoras()}:${data.getMinutos()}`

    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Mobile</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Aula de Mobile</h1>')
    res.write(`<p>Hoje é ${d}</p>`)
    res.write(`<p>No momento são ${h}</p>`)
    res.write('</body>')
    res.write('</html>')
    res.end()
  }
).listen(3000)

console.log('Servidor funcionando na porta 3000. Pressione Ctrl + C para derrubar')