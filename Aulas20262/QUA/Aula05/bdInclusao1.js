let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "INSERT INTO console(descricao, ano) VALUES ('Nintendo Color TV-Game', 1977)"

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Console inserido com sucesso!')
        }
      )
    }
  }
)