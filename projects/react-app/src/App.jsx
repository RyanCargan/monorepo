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
// let [useEffectOnce] = [utils.useEffectOnce]

const App = () => {

  return(
    <div className='app'>
      <MetaHeader/>
      <RouteList />
    </div>
  )
}

export default App
