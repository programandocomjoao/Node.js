let fs = require('fs')

fs.writeFile('games.txt', 'Sonic The Hedgehog',
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo escrito com sucesso!')
  }
)