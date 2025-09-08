let conexao = require('./bdConectaPet')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = "DELETE FROM animal WHERE id = 8"

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