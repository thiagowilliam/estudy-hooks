import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const DefaultLayout = lazy(() => import('./layouts/DefaultLyout'))
const UseStateHook = lazy(() => import('./pages/UseState'))
const UseEffectHook = lazy(() => import('./pages/UseEffect'))
const UseRefHook = lazy(() => import('./pages/UseRef'))
const UseContextHook = lazy(() => import('./pages/UseContext'))
const UseReducerHook = lazy(() => import('./pages/UseReducer'))

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
        <Route
          path="/useRef"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <UseRefHook />
            </Suspense>
          }
        />

        <Route
          path="/useContext"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <UseContextHook />
            </Suspense>
          }
        />

        <Route
          path="/useReducer"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <UseReducerHook />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
