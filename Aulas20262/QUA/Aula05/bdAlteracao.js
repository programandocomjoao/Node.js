let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      //let sql = "UPDATE console SET descricao = 'NES (Family Computer)' WHERE id = 6"
      let sql = "UPDATE console SET id = id - 1 WHERE id > 3"

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Console atualizado com sucesso!')
        }
      )
    }
  }
)