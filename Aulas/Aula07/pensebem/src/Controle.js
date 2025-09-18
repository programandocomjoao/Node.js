import Dados from "./Dados"

function Controle() {
  const jogar = (resposta) => {
    if(resposta == Dados.gabarito[Dados.pergunta-1]) {
      if(Dados.tentativa == 1)
        Dados.pontos += 3
      else if(Dados.tentativa == 2)
        Dados.pontos += 2
      else if(Dados.tentativa == 3)
        Dados.pontos++

      Dados.pergunta++
      Dados.tentativa = 1
      document.getElementById('tela1').style.border = 'black 1px solid'
    }
    else {
      document.getElementById('tela1').style.border = 'red 3px solid'
      Dados.tentativa++

      if(Dados.tentativa > 3) {
        Dados.pergunta++
        Dados.tentativa = 1
        document.getElementById('tela1').style.border = 'black 1px solid'
      }
    }

    document.getElementById('tela1').value = `${Dados.programa} : ${Dados.pergunta}`
    document.getElementById('tela2').value = `Tentativa ${Dados.tentativa} de 3`

    if(Dados.pergunta > 5) {
      document.getElementById('tela1').value = '***FIM***'
      document.getElementById('tela2').value = `Pontuação: ${Dados.pontos}`
    }
  }

  return(
    <>
      <input type="button" id="botaoA" value="A" onClick={() => jogar('A')} />
      <input type="button" id="botaoB" value="B" onClick={() => jogar('B')} />
      <input type="button" id="botaoC" value="C" onClick={() => jogar('C')} />
      <input type="button" id="botaoD" value="D" onClick={() => jogar('D')} />
    </>
  )
}

export default Controle