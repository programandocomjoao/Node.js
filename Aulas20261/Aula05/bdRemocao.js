let conexao = require('./bdConexaoPetshop')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = "DELETE FROM animal WHERE id = 5"

      conexao.query(operacao,
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Animal excluído com sucesso!')
        }
      ) 
    }
  }
)