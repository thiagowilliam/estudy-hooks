import { useEffect, useState } from 'react'
import { SpecialComponent } from '../SpecialComponent'

export function Counter() {
  const [counter, setCounter] = useState(0)

  function increaseCounter() {
    setCounter(counter + 1)
  }

  useEffect(() => {
    // alert(`Counter alterado ${counter}`)
  }, [counter])
  return (
    <>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={increaseCounter}>Aumentar o counter</button>
    </>
  )
}
