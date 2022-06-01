import { Link, Route } from "wouter"
import useStore from "./store"
import './scss/App.scss'

const App = () => {

  const users = useStore(state => state.users)

  return(
    <>
      <>
      {/* <Users /> */}
      </>

      <Link href="/users/1">
        <a className="link">Profile</a>
      </Link>

      <Route path="/about">About Us</Route>
      <Route path="/users/:name">
        {(params) => <div>Hello, {params.name}!</div>}
      </Route>
      {/* <Route path="/inbox" component={InboxPage} /> */}
    </>
  )
}

export default App
