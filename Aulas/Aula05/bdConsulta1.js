let conexao = require('./bdConectaPet')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = 'SELECT * FROM animal'

      conexao.query(operacao,
        function(erro, resultado, campos) {
          if(erro)
            throw erro
          else
            console.log(resultado)
        }
      )
    }
  }
)