import { useRef } from 'react'

export function RefAsCounter() {
  const counterRef = useRef(0)
  function increaseCounter() {
    counterRef.current++
  }

  function showCounter() {
    alert(`O botão foi clicado ${counterRef.current} vezes`)
  }
  return (
    <>
      <h3>useRef como uma alternativa ao useState</h3>
      <div>
        <button onClick={increaseCounter}>Clicar</button>
        <button onClick={showCounter}>
          Mostar quantas vezes o botão foi clicado
        </button>
      </div>
    </>
  )
}
