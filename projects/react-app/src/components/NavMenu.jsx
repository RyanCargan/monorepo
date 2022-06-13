import React, {useState, useEffect, useMemo, useCallback} from 'react'
import { Link, useLocation } from 'wouter'
import useStore from '../scripts/store'
import { utils } from '../scripts/utils'
let [useEffectOnce] = [utils.useEffectOnce]

// const checkSessionState = () => {
// 	// Request session token
// }

const NavMenu = (props) => {
	const users = useStore(state => state.users)

	// Menu & sub-menus
	const [isMain, setIsMain] = useState(true)
	const [isBlog, setIsBlog] = useState(false)
	const [isPortfolio, setIsPortfolio] = useState(false)
	const [isSubsite, setIsSubsite] = useState(false)
	const [isUnknown, setIsUnknown] = useState(false)

	const [location, setLocation] = useLocation()
  
	//Effect is called everytime the values change
	useEffectOnce(() => {
	  console.log(isMain)
	}, [isMain])
  
	useEffectOnce(() => {
	  	console.log(`Location detected:\n${location}`)
	  // Fire functions on path (site.com/path/subpath) changes
		if (location === '/') {
			setIsMain(isMain)
		} else if (location === '/blog') {
			setIsMain(!isMain)
			setIsBlog(true)
		} else if (location === '/portfolio') {
			setIsMain(!isMain)
			setIsPortfolio(true)
		} else if (location === '/subsite') {
			setIsMain(!isMain)
			setIsSubsite(true)
		} else if (location === '/subsite/bitrot') {
			setIsMain(!isMain)
			setIsSubsite(true)
		} else {
			setIsUnknown(true)
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
			<a onClick={() => setLocation("/somewhere")}><br />Click to update</button>
			</div> */}
		{/* {isUnknown &&
			<>
				404!
			</>} */}

		{isMain &&
			<div className='nav-menu'>
				<Link href='/blog'>
				<button className='block'>
					Blog
				</button>
				</Link>
				<br />
				<Link href='/portfolio'>
				<button className='block'>Portfolios</button>
				</Link>
				<br />
				<Link href='/subsite'>
				<button className='block'>
					Subsites
				</button>
				</Link>
				<br />
				{/* <Link href='/collection'>
				<button className='block'>Collection (Placeholder)</button>
				</Link>
				<br /> */}
			</div>}

		{!isMain &&
			<div className='subsite-nav-menu'>
				<Link href='/'>
				<button className='block'>
					Main Menu
				</button>
				<br />
				</Link>
				{isSubsite &&
				<>
					<br /><>Subsites</><br /><br />
					<Link href='/subsite/bitrot'>
					<button className='block'>Bitrot</button>
					</Link>
					<br />
				</>}
			</div>}

		</div>
	)
}

export default NavMenu
