let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = 'CREATE TABLE turma (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, codigo VARCHAR(20), descricao VARCHAR(30))'

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