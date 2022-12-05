import { useState } from 'react'

export function ExclusiveContent() {
  const [showContent, setShowContent] = useState(false)

  function handleShowContent() {
    setShowContent(!showContent)
  }

  return (
    <>
      <h1>Show and Hide content</h1>
      <button onClick={handleShowContent}>
        {showContent ? 'hide exclusive content' : 'Show exclusive content'}
      </button>
      {showContent && <p>Exclusive content</p>}
    </>
  )
}
