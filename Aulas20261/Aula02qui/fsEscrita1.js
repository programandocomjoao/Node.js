let fs = require('fs')

fs.writeFile('mobile.txt', 'Tópico 2: React JS',
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo escrito com sucesso!')
  }
)