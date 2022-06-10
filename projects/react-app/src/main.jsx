import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './styles/main.scss'

import App from './App'

const e = createRoot

e(document.getElementById('root')).render(
  /*
    Turn off strict mode to avoid double invocation of functions passed to useState, useMemo, or useReducer in dev builds (strict mode won't affect production builds).
    
    May have caused some bugs while using useEffect to set state (with useState) when a URL is visited directly, by detecting 'window.location.pathname'.

    TODO: See if there's a cleaner way to handle that.
  */
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
