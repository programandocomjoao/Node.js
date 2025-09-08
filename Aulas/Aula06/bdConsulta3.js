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
            for(let i = 0; i < resultado.length; i++)
              console.log(`${resultado[i].id} | ${resultado[i].nome} | ${resultado[i].especie} | ${resultado[i].raca}`)
        }
      )
    }
  }
)