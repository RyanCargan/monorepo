import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/react'
import './styles/main.scss'

import App from './App'

const e = createRoot

const Paragraph = ({ children }) => <p className="mdx-paragraph">{children}</p>
const Section = ({ children }) => <p className="mdx-section">{children}</p>
const Ulist = ({ children }) => <p className="mdx-ulist">{children}</p>

e(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <MDXProvider
        components={{ 
          p: Paragraph,
          section: Section,
          ul: Ulist,
      }}>
        <App />
      </MDXProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
