let fs = require('fs')

let game = 'Super Mario Bros\nSonic The Hedgehog\nAlex Kid in The Miracle World\n'

fs.writeFile('games.txt', game,
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo escrito com sucesso!')
  }
)