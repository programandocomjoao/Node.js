let fs = require('fs')

let console1 = 'Nintendo'
let console2 = 'Master System'
let console3 = 'Super Nintendo'
let console4 = 'Mega Drive'

fs.writeFile('consoles.txt', `${console1}\n${console2}\n${console3}\n${console4}`,
  function(erro) {
    if(erro)
      throw erro
    else
      console.log('Arquivo escrito com sucesso!')
  }
)