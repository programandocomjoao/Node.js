let conexao = require('./bdConectaPet')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = "INSERT INTO animal(nome, especie, raca) VALUES ?"

      let animais = [
        ['Suzuki', 'Canina', 'Street Dog'],
        ['Pachola', 'Canina', 'Street Dog'],
        ['Betinha', 'Canina', 'Street Dog'],
        ['Mel', 'Canina', 'Poodle'],
        ['Luana', 'Canina', 'Street Dog'],
        ['Solange', 'Canina', 'Street Dog']
      ]

      conexao.query(operacao, [animais],
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