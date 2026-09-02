let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = 'CREATE TABLE livro(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, titulo VARCHAR(50), ano INT)'

      conexao.query(sql,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Tabela criada com sucesso!')
        }
      )
    }
  }
)