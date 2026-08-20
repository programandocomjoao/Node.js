let fs = require('fs')

let games = 'Super Mario Bros\nSonic The Hedgehog\nAlex Kid in The Miracle World\n'

fs.writeFile('games.txt', games,
  function(erro) {
    if(erro) 
      throw erro
    else
      console.log('Arquivo escrito com sucesso!')
  }
)