let conexao = require('./bdConectaPet')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = "UPDATE animal SET raca = 'Vira-Lata' WHERE raca = 'Street Dog'"

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