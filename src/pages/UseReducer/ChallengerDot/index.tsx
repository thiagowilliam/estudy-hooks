import { useState } from 'react'
import * as S from './styles'

type DotProps = {
  clientX: number
  clientY: number
}

export function ChallegerDot() {
  const [list, setList] = useState<DotProps[]>([])
  const [unDid, setUnDid] = useState<DotProps[]>([])

  function handleClick(event: DotProps) {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
    }
    console.log(newDot)
    setList((prev) => [...prev, newDot])
  }

  function handleUndo(event: any) {
    event.stopPropagation()
    if (list.length === 0) {
      return
    }

    const lastDotList = list[list.length - 1]
    setUnDid((prev) => [...prev, lastDotList])

    setList((prev) => {
      const newArrayList = [...prev].slice(0, -1)
      return newArrayList
    })
  }

  function handleRedo(event: any) {
    event.stopPropagation()

    if (unDid.length === 0) {
      return
    }

    const recoverDot = unDid[unDid.length - 1]

    setUnDid((prev) => {
      const newArrayList = [...prev].slice(0, -1)
      return newArrayList
    })

    setList((prev) => [...prev, recoverDot])
  }

  return (
    <S.Container>
      <h1>ChallegerDot</h1>
      {list.map((dot, index) => (
        <S.Dot
          key={index}
          style={{
            left: dot.clientX,
            top: dot.clientY,
          }}
        />
      ))}
      <S.WrapperDot onClick={handleClick}>
        <S.WrapperButton>
          <S.Button onClick={handleUndo}>Desfazer</S.Button>
          <S.Button onClick={handleRedo}>Refazer</S.Button>
        </S.WrapperButton>
      </S.WrapperDot>
    </S.Container>
  )
}
