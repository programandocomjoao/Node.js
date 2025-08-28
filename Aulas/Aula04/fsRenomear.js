let fs = require('fs')

fs.rename('videogames.txt', 'consoles.txt',
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo renomeado com sucesso!')
  }
)