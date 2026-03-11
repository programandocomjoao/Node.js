let fs = require('fs')

fs.open('mobile.txt', 'w',
  function(erro, arquivo) {
    if(erro)
      throw erro
    else
      console.log('Arquivo criado com sucesso!')
  }
)