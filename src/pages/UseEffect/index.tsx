import { useEffect } from 'react'
import { ConsultaApiDog } from './ConsultaApiDog'
import { Counter } from './Counter'
import { Numeros } from './Numeros'
import { SpecialComponent } from './SpecialComponent'
import * as S from './styles'

export default function UseEffectHook() {
  useEffect(() => {
    document.title = 'React Hooks | useEffect'
  }, [])
  return (
    <div>
      <h1>UseEffect</h1>
      <S.ContentLine>
        <Counter />
      </S.ContentLine>
      <S.ContentLine>
        <SpecialComponent />
      </S.ContentLine>
      <S.ContentLine>
        <ConsultaApiDog />
      </S.ContentLine>
      <S.ContentLine>
        <Numeros />
      </S.ContentLine>
    </div>
  )
}
