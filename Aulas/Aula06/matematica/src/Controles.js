import Globais from "./Globais"

function Controles() {
  const calcularDelta = () => {
    Globais.A = Number(document.getElementById('A').value)
    Globais.B = Number(document.getElementById('B').value)
    Globais.C = Number(document.getElementById('C').value)

    Globais.delta = Math.pow(Globais.B, 2) - 4 * Globais.A * Globais.C

    document.getElementById('delta').value = Globais.delta
  }

  return(
    <>
      <hr />
      <input type="button" value="Calcular Delta" onClick={calcularDelta} />
      <input type="button" value="Calcular X1" />
      <input type="button" value="Calcular X2" />
      <hr />
    </>
  )
}

export default Controles