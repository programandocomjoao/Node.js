let fs = require('fs')

fs.appendFile('games.txt', 'Sonic The Hedgehog\n',
  function(erro) {
    if(erro) 
      throw erro
    else
      console.log('Arquivo atualizado com sucesso!')
  }
)