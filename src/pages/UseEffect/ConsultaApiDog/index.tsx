import { useEffect, useState } from 'react'

export function ConsultaApiDog() {
  const [imagem, setImagem] = useState('')
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setImagem(data.message))
  }, [])
  return (
    <>
      <h1>ConsultaApiDog</h1>
      <img src={imagem} alt="dog" width={150} height={150} />
    </>
  )
}
