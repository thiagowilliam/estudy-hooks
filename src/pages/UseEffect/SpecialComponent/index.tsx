import { useEffect, useState } from 'react'

export function SpecialComponent() {
  const [showComponent, setShowComponent] = useState(false)
  useEffect(() => {
    if (!showComponent) {
      document.title = 'React Hooks | useEffect'
    } else {
      document.title = 'React Hooks | useEffect | SpecialComponent'
    }
  }, [showComponent])
  return (
    <>
      <h1>SpecialComponent</h1>
      <p>Confira o título da página</p>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Voltar ao anterior' : 'Trocar Titulo'}
      </button>
    </>
  )
}
