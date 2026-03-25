let http = require('http')
let fs = require('fs')
let formidable = require('formidable')
let conexao = require('./bdConexaoPetshop')

http.createServer(
  function(req, res) {
    if(req.url == '/gravaAnimal') {
      let form = new formidable.IncomingForm()

      form.parse(req,
        function(erro, campos, arquivos) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write('<h1>Animal Cadastrado</h1>')
          res.write(`<p>Nome: ${campos.nome}</p>`)
          res.write(`<p>Raça: ${campos.raca}</p>`)

          conexao.connect(
            function(erro) {
              if(erro)
                throw erro
              else {
                let operacao = `INSERT INTO animal(nome, raca) VALUES('${campos.nome}', '${campos.raca}')`
          
                conexao.query(operacao,
                  function(erro) {
                    if(erro)
                      throw erro
                    else
                      console.log('Animal inserido com sucesso!')
                  }
                ) 
              }
            }
          )

          //conexao.end()
          res.end()
        }
      )
    }
    else {
      fs.readFile('cadastroAnimal.html',
        function(erro, pagina) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write(pagina)
          res.end()
        }
      )
    }
  }
).listen(3000)

console.log('Servidor em operação na porta 3000. Pressione Ctrl + C para derrubar.')