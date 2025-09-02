let mysql = require('mysql')

let conexao = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: ''
  }
)

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      conexao.query('CREATE DATABASE petshop',
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Banco de dados criado com sucesso!')
        }
      )
    }
  }
)