import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { inject } from '@vercel/analytics'
import './index.css'
import App from './App.jsx'

const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)

// Production HTML is prerendered (scripts/prerender.mjs); hydrate it.
// In dev the root is empty, so render from scratch.
const container = document.getElementById('root')
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)

// Vercel Web Analytics: cookieless page views, so no consent banner is needed.
inject()
