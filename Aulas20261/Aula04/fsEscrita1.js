let fs = require('fs')

fs.writeFile('mobile.txt', 'Aula de 17/03/2026: Módulo MySQL',
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo escrito com sucesso!')
  }
)