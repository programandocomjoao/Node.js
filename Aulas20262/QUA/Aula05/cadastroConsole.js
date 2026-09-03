let http = require('http')
let fs = require('fs')
let formidable = require('formidable')
let conexao = require('./bdConexao')

http.createServer(
  function(req, res) {
    if(req.url == '/cadastroConsole') {
      let form = new formidable.IncomingForm()

      form.parse(req,
        function(erro, campos, arquivos) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write('<h1>Console Cadastrado</h1>')
          res.write(`<p>Ano de Lançamento: ${campos.ano}</p>`)
          res.write(`<p>Descrição: ${campos.descricao}</p>`)

          conexao.connect(
            function(erro) {
              if(erro)
                throw erro
              else {
                let sql = `INSERT INTO console(descricao, ano) VALUES ('${campos.descricao}', ${campos.ano})`
          
                conexao.query(sql,
                  function(erro) {
                    if(erro)
                      throw erro
                  }
                )
              }
            }
          )

          res.end()    
        }
      )
    }
    else {
      fs.readFile('cadastroConsole.html',
        function(erro, conteudo) {
          res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
          res.write(conteudo)
          res.end()           
        }
      )
    }
  }
).listen(3000)
  
console.log('Servidor rodando na porta 3000. Pressione Ctrl + C para derrubar!')