import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/react'
import './styles/main.scss'

import App from './App'

const e = createRoot

// const Base = ({ children }) => <base className="mdx-base">{children}</base>
const Heading1 = ({ children }) => <h1 className="mdx-heading">{children}</h1>
const Heading2 = ({ children }) => <h2 className="mdx-heading">{children}</h2>
const Heading3 = ({ children }) => <h3 className="mdx-heading">{children}</h3>
const Heading4 = ({ children }) => <h4 className="mdx-heading">{children}</h4>
const Heading5 = ({ children }) => <h5 className="mdx-heading">{children}</h5>
const Heading6 = ({ children }) => <h6 className="mdx-heading">{children}</h6>

const Paragraph = ({ children }) => <p className="mdx-paragraph">{children}</p>
const Section = ({ children }) => <section className="mdx-section">{children}</section>
const Ulist = ({ children }) => <ul className="mdx-ulist">{children}</ul>
const Olist = ({ children }) => <ol className="mdx-olist">{children}</ol>

e(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <MDXProvider
        components={{ 
          // base: Base,
          h1: Heading1,
          h2: Heading2,
          h3: Heading3,
          h4: Heading4,
          h5: Heading5,
          h6: Heading6,
          p: Paragraph,
          section: Section,
          ul: Ulist,
          ol: Olist,
      }}>
        <App />
      </MDXProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
