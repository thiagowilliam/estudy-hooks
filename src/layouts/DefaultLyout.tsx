import { Outlet } from 'react-router-dom'
import { Container } from '../components/Container'
import { Header } from '../components/Header'

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
