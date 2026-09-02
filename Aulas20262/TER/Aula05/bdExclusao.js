let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "DELETE FROM livro WHERE id = 6"

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Livro excluído com sucesso!')
        }
      )
    }
  }
)