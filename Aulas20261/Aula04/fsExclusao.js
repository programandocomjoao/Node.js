let fs = require('fs')

fs.unlink('Vasco Campeão.txt',
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo excluído com sucesso!')
  }
)