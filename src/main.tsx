import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './GlobalStyle.ts'

const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <GlobalStyle/>
        <App />
    </StrictMode>,
)