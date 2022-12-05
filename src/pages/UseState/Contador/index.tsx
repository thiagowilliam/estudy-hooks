import { useState } from 'react'
import * as S from './styles'

export function Contador() {
  const [contador, setContador] = useState(0)

  function handleIncrement() {
    setContador(contador + 1)
  }

  function handleDecrement() {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }
  return (
    <S.Container>
      <h1>Contador</h1>
      <p>
        Valor:<strong>{contador}</strong>
      </p>
      <S.ButtonContainer>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </S.ButtonContainer>
    </S.Container>
  )
}
