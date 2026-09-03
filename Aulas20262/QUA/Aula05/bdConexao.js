let mysql = require('mysql')

let conexao = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja'
  }
)

module.exports = conexao