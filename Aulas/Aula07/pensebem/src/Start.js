import Dados from "./Dados"

function Start() {
  const iniciar = () => {
    Dados.programa = prompt('Digite o número do programa(021 a 023):', '')

    if(Dados.programa == '021')
      Dados.gabarito = Dados.gabarito021
    else if(Dados.programa == '022')
      Dados.gabarito = Dados.gabarito022
    else if(Dados.programa == '023')
      Dados.gabarito = Dados.gabarito023
    else {
      alert('Número de programa inválido!\nDigite um número entre 021 e 023')
      iniciar()
    }

    Dados.pergunta = 1
    Dados.tentativa = 1
    Dados.pontos = 0

    document.getElementById('tela1').value = `${Dados.programa} : ${Dados.pergunta}`
    document.getElementById('tela2').value = `Tentativa ${Dados.tentativa} de 3`
  }

  return(
    <p><input type="button" id="botaoStart" value="Start/Reset Game" onClick={iniciar} /></p>
  )
}

export default Start