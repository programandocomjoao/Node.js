let conexao = require('./bdConexaoPetshop')

conexao.connect(
  function(erro) {
    if(erro)
      throw erro
    else {
      let operacao = "INSERT INTO animal(nome, raca) VALUES ?"

      let animais = [
        ['Mel', 'Poodle'],
        ['Botafogo', 'Street Cat'],
        ['Luana', 'Street Dog'],
        ['Solange', 'Street Dog'],
        ['Jurema', 'Jabuti'],
        ['Tieta', 'Jabuti'],
        ['Cinthia', 'Jabuti']
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