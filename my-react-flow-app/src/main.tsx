import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Flow from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Flow />
  </StrictMode>,
)
