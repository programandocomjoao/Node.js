let fs = require('fs')

fs.unlink('games.xlsx',
  function(erro) {
    if(erro) 
      throw erro
    else
      console.log('Arquivo excluído com sucesso!')
  }
)