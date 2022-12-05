import { useState } from 'react'

export function HandleTitle() {
  const [title, setTitle] = useState('My title')

  function handleTitle() {
    setTitle('New title')
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleTitle}>Change the state of my title</button>
    </div>
  )
}
