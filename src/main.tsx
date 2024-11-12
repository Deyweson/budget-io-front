import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { MainRoutes } from './main-routes'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
