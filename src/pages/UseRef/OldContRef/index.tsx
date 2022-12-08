import { useEffect, useRef, useState } from 'react'

export function OldCountRef() {
  const [count, setCount] = useState(0)
  const oldCountRef = useRef(0)

  useEffect(() => {
    oldCountRef.current = count
  }, [count])
  return (
    <>
      <h1>O contator é:{count}</h1>
      <h1>O contator antigo é:{oldCountRef.current}</h1>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
    </>
  )
}
