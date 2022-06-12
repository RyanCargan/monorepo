// Packages
import React from 'react'
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

// SharedArrayBuffer test
useEffectOnce(() => {
  const sab = new SharedArrayBuffer(1024)
  console.log(sab)
}, [])

  return(
    <div className='app'>
      <MetaHeader/>
      <RouteList />
    </div>
  )
}

export default App

// TODO: Replace NixOS-specific config with standard/commonHttpConfig?
// TODO: Containerize apps
// TODO: Test SharedArrayBuffer with Nginx
// TODO: Import use-ammo fork with Git
// TODO: Add tests with RTL & Jest (test coverage with c8)
// TODO: Refactor SCSS to avoid univsersal margin, padding and other stuff (instead using a per-class approach to avoid issues with canvas margins)
// TODO: Figure out cause of canvas margin/padding bugs
// TODO: Create state machine with React hooks
// TODO: Use React's lazy loading more to reduce chunk size
