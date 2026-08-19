let fs = require('fs')

let game = 'Plack Attack\n'

fs.appendFile('games.txt', game,
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo atualizado com sucesso!')
  }
)