import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ExamProvider } from './contexts/Examcontext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExamProvider>
    <App />
    </ExamProvider>
  </StrictMode>,
)
