let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = 'CREATE TABLE console (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, descricao VARCHAR(30), ano INT)'

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