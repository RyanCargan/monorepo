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
  
	/*
	Move this useEffect's conditions to a separate component and replace useState with Zustand's global useStore.
	That should enable 404s without relying on wouter's switch.
	*/
	useEffectOnce(() => {
	  	console.log(`Location detected:\n${location}`)
	  // Fire functions on path (site.com/path/subpath) changes
		if (location === '/') {
			setIsMain(isMain)
			console.log('Main')
		} else if (location.startsWith('/blog')) {
			console.log('Blog')
			setIsMain(!isMain)
			setIsBlog(true)
		} else if (location.startsWith('/portfolio')) {
			console.log('Portfolio')
			setIsMain(!isMain)
			setIsPortfolio(true)
		} else if (location.startsWith('/subsite')) {
			console.log('Subsite')
			setIsMain(!isMain)
			setIsSubsite(true)
		}
		// else if (location === '/subsite/bitrot') {
		// 	console.log('Bitrot')
		// 	setIsMain(!isMain)
		// 	setIsSubsite(true)
		// }
		// } else {
		// 	setIsUnknown(true) // Never triggers since NavMenu won't load from App.jsx on unknown URLs
		// 	console.log('Unknown')
		// 	// alert('404')
		// 	// setLocation('/404')
		// 	// window.location.pathname == '/404'
		// }
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
			<>404!</>} */}

		{isMain &&
			<div className='nav-menu'>
				<Link href='/blog'>
				<button className='block'>
					Blogs
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
		{isBlog &&
			<>
				<br /><>Bloggers</><br /><br />
				<Link href='/blog/ryan'>
				<button className='block'>Ryan</button>
				</Link>
				<br />
			</>}
		{isPortfolio &&
			<>
				<br /><>Portfolios and Résumés</><br /><br />
				<Link href='/portfolio/ryan'>
				<button className='block'>Ryan</button>
				</Link>
				<br />
			</>}
		{isSubsite &&
			<>
				<br /><>Subsites</><br /><br />
				<Link href='/subsite/bitrot'>
				<button className='block'>Bitrot</button>
				</Link>
				<br />
				<Link href='/subsite/geojot'>
				<button className='block'>Geojot</button>
				</Link>
				<br />
				<Link href='/subsite/speakeasy'>
				<button className='block'>Speakeasy</button>
				</Link>
				<br />
				<Link href='/subsite/timehack'>
				<button className='block'>Timehack</button>
				</Link>
				<br />
			</>}
		</div>}

		</div>
	)
}

export default NavMenu
