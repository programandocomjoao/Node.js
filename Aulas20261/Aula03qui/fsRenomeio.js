let fs = require('fs')

fs.rename("dispositivos.txt", "consoles.txt",
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo renomeado com sucesso!')
  }
)