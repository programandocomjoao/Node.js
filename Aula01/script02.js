let http = require('http')

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})

    res.write('<html>')
    res.write('<head>')
    res.write('<title>Aula de Node.js</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Desenvolvimento Mobile</h1>')
    res.write('<p>Aprender Node.js é de arrepiar os cabelos da churreia.</p>')
    res.write('</body>')
    res.write('</html>')

    res.end()
  }
).listen(8080)

console.log('Servidor em operação na porta 8080. Pressione Ctrl + C para encerrar.')