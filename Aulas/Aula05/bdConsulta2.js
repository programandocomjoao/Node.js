let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = "SELECT * FROM animal"

      conexao.query(operacao,
        function(erro, resultado, campos) {
          if(erro)
            throw erro
          else
            console.log(`${resultado[0].id} | ${resultado[0].nome} | ${resultado[0].especie} | ${resultado[0].raca}`)
        }
      )
    }
  }
)