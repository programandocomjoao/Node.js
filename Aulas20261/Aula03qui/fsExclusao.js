let fs = require('fs')

fs.unlink("Botafogo Campeão.txt",
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo excluído com sucesso!')
  }
)