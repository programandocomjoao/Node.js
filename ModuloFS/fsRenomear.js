let fs = require('fs')

fs.rename('consoles.txt', 'videogames.txt',
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo renomeado com sucesso!')
  }
)