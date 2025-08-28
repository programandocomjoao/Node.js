let fs = require('fs')

fs.unlink('paginas.zip',
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo escluído com sucesso!')
  }
)