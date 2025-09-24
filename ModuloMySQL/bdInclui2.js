let conexao = require('./bdConexao')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let sql = "INSERT INTO animal(nome, raca) VALUES ?"

      let animais = [
        ['Betinha', 'Street Dog'],
        ['Luana', 'Street Dog'],
        ['Solange', 'Street Dog']
      ]

      conexao.query(sql, [animais],
        function(erro) {
          if(erro)
            throw erro
          else
            console.log('Animais inseridos com sucesso!')
        }
      )
    }
  }
)