let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      //let sql = "UPDATE livro SET ano = 1472 WHERE id = 4"
      let sql = "UPDATE livro SET id = id - 1 WHERE id > 5"

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Livro atualizado com sucesso!')
        }
      )
    }
  }
)