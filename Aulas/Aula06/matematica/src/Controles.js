import Globais from "./Globais"

function Controles() {
  const calcularDelta = () => {
    Globais.A = document.getElementById('A').value
    Globais.B = document.getElementById('B').value
    Globais.C = document.getElementById('C').value

    Globais.delta = Math.pow(Globais.B, 2) - 4 * Globais.A * Globais.C

    document.getElementById('delta').value = Globais.delta
  }

  const calcularX1 = () => {
    Globais.x1 = (-Globais.B + Math.sqrt(Globais.delta)) / (2 * Globais.A)

    document.getElementById('x1').value = Globais.x1
  }

  const calcularX2 = () => {
    Globais.x2 = (-Globais.B - Math.sqrt(Globais.delta)) / (2 * Globais.A)

    document.getElementById('x2').value = Globais.x2
  }

  return(
    <>
      <hr />
      <input type="button" value="Calcular Delta" onClick={() => calcularDelta()} />
      <input type="button" value="Calcular X1" onClick={() => calcularX1()} />
      <input type="button" value="Calcular X2" onClick={() => calcularX2()} />
      <hr />
    </>
  )
}

export default Controles