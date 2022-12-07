import { useEffect, useState } from 'react'

export function Numeros() {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [maior, setMaior] = useState(0)

  function pegaMaior(n1: number, n2: number) {
    if (n1 > n2) {
      return n1
    } else {
      return n2
    }
  }

  useEffect(() => {
    setMaior(pegaMaior(numero1, numero2))
  }, [numero1, numero2, maior])
  return (
    <>
      <h1>Numeros</h1>
      <p>{`Numero 1: ${numero1} | Número 2: ${numero2}`}</p>
      <strong>{`O maior número é ${maior}`}</strong>
      <div>
        <button onClick={() => setNumero1(numero1 + 1)}>N1</button>
        <button onClick={() => setNumero2(numero2 + 1)}>N2</button>
      </div>
    </>
  )
}
