import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.body.style.margin = '0'
document.body.style.fontFamily = 'Inter, Arial, sans-serif'
document.body.style.background =
  'linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e1b4b 100%)'
document.body.style.color = 'white'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
