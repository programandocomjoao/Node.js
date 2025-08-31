let fs = require('fs')

let console1 = 'Mega Drive'
let console2 = 'Super Nintendo'

fs.writeFile('consoles.txt', `${console1}\n${console2}`,
  function(erro) {
    if(erro) 
      throw erro
    else
      console.log('Arquivo escrito com sucesso!')
  }
)