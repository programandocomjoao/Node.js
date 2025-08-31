let fs = require('fs')

fs.writeFile('consoles.txt', 'Master System',
  function(erro) {
    if(erro) 
      throw erro
    else
      console.log('Arquivo escrito com sucesso!')
  }
)