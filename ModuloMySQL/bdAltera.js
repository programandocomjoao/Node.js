let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "UPDATE animal SET raca = 'Vira-Lata' WHERE raca = 'Street Dog'"

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Animal alterado com sucesso!')
        }
      )
    }
  }
)