let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "INSERT INTO animal(nome, raca) VALUES('Mel', 'poodle')"

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Animal inserido com sucesso!')
        }
      )
    }
  }
)