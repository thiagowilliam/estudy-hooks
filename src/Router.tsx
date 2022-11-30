import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLyout'
import { UseStateHook } from './pages/UseState'
import { UseEffectHook } from './pages/UseState/UseEffect'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<UseStateHook />} />
        <Route path="/useEffect" element={<UseEffectHook />} />
      </Route>
    </Routes>
  )
}
