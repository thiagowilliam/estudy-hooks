import { OldCountRef } from './OldContRef'
import { RefAsCounter } from './RefAsCounter'
import * as S from './styles'

export default function UseRefHook() {
  //Não re renderiza o componente
  //Referencia para elementos da DOM
  //Referencia do valor anterior de um estado
  return (
    <>
      <h1>UseRef</h1>
      <S.ContentLine>
        <RefAsCounter />
      </S.ContentLine>

      <S.ContentLine>
        <OldCountRef />
      </S.ContentLine>
    </>
  )
}
