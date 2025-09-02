let conexao = require('./bdConectaPet')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = 'CREATE TABLE animal(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(30), especie VARCHAR(10), raca VARCHAR(20))'

      conexao.query(operacao,
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