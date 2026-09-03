let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "DELETE FROM console WHERE id = 4"

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Console excluído com sucesso!')
        }
      )
    }
  }
)