let fs = require('fs')

fs.appendFile('games.txt', '1994 | Donkey Kong Country\n',
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo atualizado com sucesso!')
  }
)