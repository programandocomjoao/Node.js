let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "DELETE FROM animal WHERE id = 2"

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Animal excluído com sucesso!')
        }
      )
    }
  }
)