import { Link, Route } from 'wouter'
import { Canvas } from '@react-three/fiber'
import { Helmet } from 'react-helmet'

import useStore from './scripts/store'
import Animation from './components/Animation'
import Home from './components/Home.mdx'

import './styles/App.scss'

const App = () => {

  const users = useStore(state => state.users)

  return(
    <>

      <Helmet>
        <title>Ryan's Blog</title>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" />
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
        <Home  N={2.0} />
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
