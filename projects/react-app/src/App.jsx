// Packages
import React, { useState } from 'react'
import { useLocation } from 'wouter'
// import { Link, Route, useLocation, Router } from 'wouter'
// import { Helmet } from 'react-helmet-async'
// import { Route } from 'wouter' // Required for RouteList?

// Styles
import './styles/App.scss'

// Components
import MetaHeader from './components/MetaHeader'
import RouteList from './components/RouteList'

// Scripts
// import { set } from 'immer/dist/internal'
import { utils } from './scripts/utils'
let [useEffectOnce] = [utils.useEffectOnce]

const App = () => {
  // const placeholder = 'https://codinghermit.net'

  // // Loc test (refactor all this to a UrlCheck component later)
  // const [location, setLocation] = useLocation()
  // const [isUnknown, setIsUnknown] = useState(false)

  // // useEffectOnce(() => {
  // //   setIsUnknown(false)
  // // }, [location])

  // const validPaths = [
  //   '/',
  //   '/blog',
  //     'blog/ryan',
  //   '/portfolio',
  //     '/portfolio/ryan',
  //   '/subsite',
  //     '/subsite/bitrot',
  //     '/subsite/geojot',
  //     '/subsite/speakeasy',
  //     '/subsite/timehack',
  // ];

  // useEffectOnce(() => {
  //   console.log(`Location detected:\n${location}`)
  //   // Fire functions on path (site.com/path/subpath) changes
  //   if (!validPaths.includes(location)) {
  //     console.log('Unknown')
  //     setIsUnknown(true)
  //     console.log(`isUknown: ${isUnknown}`)
  //   }
  // }, [location])

  // SharedArrayBuffer test
  useEffectOnce(() => {
    const sab = new SharedArrayBuffer(1024)
    console.log(sab)
  }, [])

  return(
    <div className='app'>
      <MetaHeader/>
      {/* Enter a 'Did you mean X?' suggestion into the template literal or HTML element,
      using regex to find Levenshtein distance,
      or something better. */}
      {/* {isUnknown &&
      <div style={{marginLeft: '1em'}}>
        404! URL not found.<br />
        You probably misspelled something in your browser's address bar.<br /><br />
        Did you mean <a href={placeholder}>{placeholder}</a>?
      </div>} */}
      <RouteList />
      {/* <>TEST</> */}
      {/* TEST minus any letter fails while TEST plus anything (i.e. *TEST*) succeeds */}
    </div>
  )
}

export default App

// TODO: Figure out cause of canvas margin/padding bugs
// TODO: Create state machine with React hooks
