import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const DefaultLayout = lazy(() => import('./layouts/DefaultLyout'))
const UseStateHook = lazy(() => import('./pages/UseState'))
const UseEffectHook = lazy(() => import('./pages/UseEffect'))

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <UseStateHook />
            </Suspense>
          }
        />
        <Route
          path="/useEffect"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <UseEffectHook />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
