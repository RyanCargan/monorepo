import React from 'react'
import { Link, Route } from 'wouter'
import { Helmet } from 'react-helmet-async'

import useStore from './scripts/store'
import Landing from './components/Landing.mdx'
import Collection from './components/Collection'

import './styles/App.scss'
import CanvasContainer from './components/CanvasContainer'

const App = () => {

  const users = useStore(state => state.users)

  return(
    <div className='app'>
      <Helmet>
        <title>Coding Hermit</title>
        
        {/* Dependencies */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css'
        />
      </Helmet>

      <div className='nav-menu'>
        <Link href='/blog'>
          <a className='link'>Blog</a>
        </Link>
        <br />
        <Link href='/portfolio'>
          <a className='link'>Portfolios</a>
        </Link>
        <br />
        <Link href='/subsite'>
          <a className='link'>Subsites</a>
        </Link>
        <br />
        <Link href='/subsite/hotswap'>
          <a className='link'>Subsite: Hotswap</a>
        </Link>
        <br />
        <Link href='/collection'>
          <a className='link'>Collection (Placeholder)</a>
        </Link>
        <br />
      </div>
      
      <Route path='/blog'>
        <Landing  N={2.0} />
      </Route>
      <Route path='/collection'>
        <Collection var1='world!' />
      </Route>
      <Route path='/portfolio/:name'>
        {(params) => <div>Hello, {params.name}!</div>}
      </Route>
      <Route path='/subsite/hotswap'>
        <CanvasContainer />
      </Route>
    </div>
  )
}

export default App
