let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "INSERT INTO livro(titulo, ano) VALUES ?"

      let livros = [
        ['A Divina Comédia', 1304],
        ['Guerra e Paz', 1865],
        ['1984', 1947],
        ['A Revolução dos Bichos', 1945],
        ['Assim Falava Zaratustra', 1883]
      ]

      conexao.query(sql, [livros],
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Livros cadastrados com sucesso!')
        }
      )
    }
  }
)