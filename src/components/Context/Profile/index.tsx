import { useContext } from 'react'
import { UserContext } from '../../../Store/UserContext'

import * as S from './styles'

export function Profile() {
  const context = useContext(UserContext)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('dados')
  }
  return (
    <S.ContainerForm>
      <label htmlFor="fullName">Nome:</label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        value={context?.user.fullName}
        onChange={(ev) => context?.updateUser({ fullName: ev.target.value })}
        placeholder="Full Name"
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={context?.user.email}
        onChange={(ev) => context?.updateUser({ email: ev.target.value })}
        placeholder="Email"
      />

      <button type="submit"> Enviar </button>
    </S.ContainerForm>
  )
}
