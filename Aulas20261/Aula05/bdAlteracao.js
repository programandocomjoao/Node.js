let conexao = require('./bdConexaoPetshop')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = "UPDATE animal SET nome = 'Tristonho', raca = 'Street Dog' WHERE id = 5"

      conexao.query(operacao,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Animal alterado com sucesso!')
        }
      ) 
    }
  }
)