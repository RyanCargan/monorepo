import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'wouter'
import useStore from '../scripts/store'
import { utils } from '../scripts/utils'
let [useEffectOnce] = [utils.useEffectOnce]

// const checkSessionState = () => {
// 	// Request session token
// }

const NavMenu = (props) => {
	const users = useStore(state => state.users)
	const [isMain, setIsMain] = useState(props.isMain ? props.isMain : true)

	const [location, setLocation] = useLocation()
  
	//Effect is called everytime the values change
	useEffectOnce(() => {
	  console.log(isMain)
	}, [isMain])
  
	useEffectOnce(() => {
	  console.log(`Location detected:\n${location}`)
	  // Fire whatever function on path (site.com/path/subpath) changes
	  if (location === '/') {
		setIsMain(isMain)
	  } else {
		setIsMain(!isMain)
	  }
	}, [location])

	// useEffectOnce(() => {
	// 	// Redirect to login if session request fails
	// 	if (checkSessionState() === false) {
	// 	  setLocation('/login')
	// 	}
	// }, [])

	return (
		<div>
			{/* <div>
			{`The current page is: ${location}`}
			<a onClick={() => setLocation("/somewhere")}><br />Click to update</a>
			</div> */}

		{isMain &&
			<div className='nav-menu'>
				<Link href='/blog' onClick={() => setIsMain(isMain)}>
				<a className='link'>
					Blog
				</a>
				</Link>
				<br />
				<Link href='/portfolio'  onClick={() => console.log("???")}>
				<a className='link'>Portfolios</a>
				</Link>
				<br />
				<Link href='/subsite' onClick={() => setIsMain(true)}>
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

		{!isMain &&
			<div className='subsite-nav-menu'>
				<Link href='/' onClick={() => setIsMain(true)}>
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
		</div>
	)
}

export default NavMenu
