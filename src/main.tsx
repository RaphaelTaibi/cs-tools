import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './demo-styles.css'
import App from './demo/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
