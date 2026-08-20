let fs = require('fs')

fs.open('games.txt', 'w',
  function(erro, arquivo) {
    if(erro) 
      throw erro
    else
      console.log('Arquivo aberto/criado com sucesso!')
  }
)