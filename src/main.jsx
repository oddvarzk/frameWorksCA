import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '.styles/index.css'
import GlobalStyle from './styles/globalStyle.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GlobalStyle/>
        <BrowserRouter>
          <App />
        </BrowserRouter>
  </StrictMode>,
)
