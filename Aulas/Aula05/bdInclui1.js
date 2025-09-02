let conexao = require('./bdConectaPet')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = "INSERT INTO animal(nome, especie, raca) VALUES('Coracao', 'Canina', 'Street Dog')"

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