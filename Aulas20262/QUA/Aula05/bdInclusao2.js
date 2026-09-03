let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "INSERT INTO console(descricao, ano) VALUES ?"

      let consoles = [
        ['Nintendo Game & Watch', 1980], 
        ['NES (Famicom)', 1983],
        ['Sega SG-1000', 1983], 
        ['Sega Mark III', 1985], 
        ['Master System', 1986]
      ]

      conexao.query(sql, [consoles],
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Consoles inseridos com sucesso!')
        }
      )
    }
  }
)