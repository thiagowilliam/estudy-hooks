import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { UserContextProvider } from './Store/UserContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
)
