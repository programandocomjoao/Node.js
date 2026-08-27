let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = 'CREATE TABLE animal(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(30), raca VARCHAR(20))'

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