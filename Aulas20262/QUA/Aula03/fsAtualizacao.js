let fs = require('fs')

let game = 'Tartarugas Ninjas II: The Arcade Game\n'

fs.appendFile('games.txt', game,
  function(erro) {
    if(erro) 
      throw erro
    else
      console.log('Arquivo atualizado com sucesso!')
  }
)