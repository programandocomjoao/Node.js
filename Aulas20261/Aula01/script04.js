let http = require('http')

let nome = 'Gabriel'
let idade = 22
let altura = 1.71
let peso = 79.3
let sexo = 'M'

http.createServer(
  function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Nutrição</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>Dados do Paciente</h1>')
    res.write('<ul>')
    res.write(`<li>Nome: ${nome}</li>`)
    res.write(`<li>Idade: ${idade}</li>`)
    res.write(`<li>Altura: ${altura}</li>`)
    res.write(`<li>Peso: ${peso}</li>`)
    res.write(`<li>Sexo: ${sexo}</li>`)
    res.write(`<li>IMC: ${peso/(altura * altura)}</li>`)
    res.write('</ul>')
    res.write('</body>')
    res.write('</html>')
    res.end()
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar.')