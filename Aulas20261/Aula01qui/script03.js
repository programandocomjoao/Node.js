let http = require('http')

let nome = 'Fernanda da Costa'
let idade = 13
let peso = 39.3
let altura = 1.43
let sexo = 'F'

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Mobile</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Dados do Aluno</h1>')
    res.write('<ul>')
    res.write(`<li>Nome: ${nome}</li>`)
    res.write(`<li>Idade: ${idade}</li>`)
    res.write(`<li>Peso: ${peso}Kg</li>`)
    res.write(`<li>Altura: ${altura}m</li>`)
    res.write(`<li>Sexo: ${sexo}</li>`)
    res.write('</ul>')
    res.write('</body>')
    res.write('</html>')
    res.end()
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar!')