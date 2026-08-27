let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "INSERT INTO turma(codigo, descricao) VALUES('SII1P0204M0003', 'Desenvolvimento Web II')"

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Turma inserida com sucesso!')
        }
      )
    }
  }
)