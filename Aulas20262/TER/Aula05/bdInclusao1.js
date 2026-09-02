let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "INSERT INTO livro(titulo, ano) VALUES('Meu Pé de Laranja Lima', 1968)"

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Livro cadastrado com sucesso!')
        }
      )
    }
  }
)