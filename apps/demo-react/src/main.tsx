import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../../packages/react/src/styles/index.css'
import './demo-styles.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
