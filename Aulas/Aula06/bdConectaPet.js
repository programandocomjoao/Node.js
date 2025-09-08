let mysql = require('mysql')

let conexao = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'petshop'
  }
)

module.exports = conexao