import { Contador } from './Contador'
import { ExclusiveContent } from './ExclusiveContent'
import { HandleTitle } from './HandleTitle'
import { MegaSena } from './MegaSena'

import * as S from './styles'

export default function UseStateHook() {
  return (
    <>
      <S.ContentLine>
        <HandleTitle />
      </S.ContentLine>
      <S.ContentLine>
        <ExclusiveContent />
      </S.ContentLine>
      <S.ContentLine>
        <Contador />
      </S.ContentLine>
      <S.ContentLine>
        <MegaSena />
      </S.ContentLine>
    </>
  )
}
