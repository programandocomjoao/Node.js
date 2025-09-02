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
    else
      console.log('Conexão estabelecida com sucesso!')
  }
)