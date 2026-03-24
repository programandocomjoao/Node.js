let conexao = require('./bdConexaoPetshop')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = "INSERT INTO animal(nome, raca) VALUES('Betinha', 'Street Dog')"

      conexao.query(operacao,
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