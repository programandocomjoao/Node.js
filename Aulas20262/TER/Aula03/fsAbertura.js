let fs = require('fs')

fs.open('jogos.docx', 'w',
  function(erro, arquivo) {
    if(erro)
      throw erro
    else
      console.log('Arquivo aberto/criado com sucesso!')
  }
)