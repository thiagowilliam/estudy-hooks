import { useState } from 'react'

export function MegaSena() {
  function mega(quantidade: number = 6, numeros: any = []): any {
    let qtde = +quantidade
    if (qtde < 6 && qtde > 60) {
      console.log('Quantidade inválida')
      throw 'Quantidade de números inválida'
    }
    if (numeros.length === qtde) {
      return numeros.sort((n1: any, n2: any) => n1 - n2)
    }

    const numeroAleatorio = Math.floor(Math.random() * 60) + 1
    if (!numeros.includes(numeroAleatorio)) {
      return mega(qtde, [...numeros, numeroAleatorio])
    } else {
      return mega(qtde, numeros)
    }
  }
  const [qtde, serQtde] = useState<any>(6)
  const [numeros, setNumeros] = useState(mega(qtde))

  return (
    <>
      <h1>Mega Sena</h1>
      <div>
        {numeros.map((item: number) => {
          return <span key={item}>{item} </span>
        })}
      </div>
      <input
        type="number"
        min={6}
        max={60}
        onChange={(ev) => serQtde(ev.target.value)}
      />
      <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
    </>
  )
}
