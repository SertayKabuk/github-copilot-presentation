import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
