let fs = require('fs')

fs.appendFile('games.txt', 'River Raid\n',
  function(erro) {
    if(erro) 
      throw erro
    else
      console.log('Arquivo atualizado com sucesso!')
  }
)