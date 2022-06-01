import { Link, Route } from 'wouter'
import { Canvas } from '@react-three/fiber'
// import {MDXProvider} from '@mdx-js/react'
import { Helmet } from 'react-helmet'

import useStore from './store'
import Animation from './components/Animation'
import Home from './mdx/Home.mdx'

import './scss/App.scss'

const App = () => {

  const users = useStore(state => state.users)

  return(
    <>

      <Helmet>
        <title>Ryan's Blog</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css" />
      </Helmet>

      <>
      {/* <Users /> */}
      </>

      {/* <div style={{
        height: '90vh',
        width: '90vw,',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Animation position={[-1.5, -1, -1]} />
        <Animation position={[1.5, 1, 1]} />
      </Canvas>
      </div> */}

      <>
      <Link href="/">
        <a className="link">Home</a>
      </Link>
      <br />
      <Link href="/about">
        <a className="link">About</a>
      </Link>
      <br />
      <Link href="/sites">
        <a className="link">Sites</a>
      </Link>
      <br />
      {/* <MDXProvider components={components}> */}
        <Home />
      {/* </MDXProvider> */}

      {/* <Route path="/about">About Us</Route>
      <Route path="/users/:name">
        {(params) => <div>Hello, {params.name}!</div>}
      </Route> */}
      {/* <Route path="/inbox" component={InboxPage} /> */}
      </>
    </>
  )
}

export default App
