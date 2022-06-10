import React, {useState, useEffect} from 'react'
import { Link, Route, Router } from 'wouter'
import { Helmet } from 'react-helmet-async'

import useStore from './scripts/store'
import Landing from './components/Landing.mdx'
import Collection from './components/Collection'

import './styles/App.scss'
import CanvasContainer from './components/CanvasContainer'
// import { set } from 'immer/dist/internal'

const App = () => {

  const users = useStore(state => state.users)

  const [hidden, setHidden] = useState(true)

  //Effect is called everytime the values change
  useEffect(() => {
    console.log(hidden)
  },[hidden])

  // useEffect(() => {
  //   console.log('Location: ', window.location.pathname)
  //   // Fire whatever function on path (site.com/path/subpath) changes
  //   setHidden(!hidden);
  // }, [window.location.pathname])

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

      {hidden &&
      <div className='nav-menu'>
        <Link href='/blog' onClick={() => setHidden(hidden)}>
          <a className='link'>
            Blog
          </a>
        </Link>
        <br />
        <Link href='/portfolio'  onClick={() => console.log("???")}>
          <a className='link'>Portfolios</a>
        </Link>
        <br />
        <Link href='/subsite' onClick={() => setHidden(!hidden)}>
          <a>
              Subsites
          </a>
        </Link>
        <br />
        <Link href='/collection'>
          <a className='link'>Collection (Placeholder)</a>
        </Link>
        <br />
      </div>}

      {!hidden &&
      <div className='subsite-nav-menu'>
        <Link href='/' onClick={() => setHidden(!hidden)}>
          <a className='link'>
            Main Menu
          </a>
        </Link>
        <br />  
        <Link href='/subsite/bitrot'>
          <a className='link'>Subsite: Bitrot</a>
        </Link>
        <br />
      </div>}

      <Route path='/'>
        <>Landing</>
      </Route>
      <Route path='/blog'>
        <Landing  N={2.0} />
      </Route>
      <Route path='/collection'>
        <Collection var1='world!' />
      </Route>
      <Route path='/portfolio/:name'>
        {(params) => <div>Hello, {params.name}!</div>}
      </Route>
      <Route path='/subsite'>
        <>Subsites</>
      </Route>
      <Route path='/subsite/bitrot'>
        <CanvasContainer />
      </Route>
    </div>
  )
}

export default App
