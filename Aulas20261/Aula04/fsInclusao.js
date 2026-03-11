let fs = require('fs')

fs.appendFile('consoles.txt', '\nNintendo DS',
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Console incluído com sucesso!')
  }
)