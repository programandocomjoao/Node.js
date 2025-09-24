let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = 'SELECT * FROM animal'

      conexao.query(sql,
        function(erro, resultado, campos) {
          if(erro)
            throw erro
          else
            console.log(resultado)
        }
      )
    }
  }
)