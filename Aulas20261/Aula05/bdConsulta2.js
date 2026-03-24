let conexao = require('./bdConexaoPetshop')

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
            console.log(`| ${resultado[3].id} | ${resultado[3].nome} (${resultado[3].raca})`)
        }
      ) 
    }
  }
)