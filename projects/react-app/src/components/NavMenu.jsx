import React, {useState, useEffect, useMemo, useCallback} from 'react'
import { Link, useLocation } from 'wouter'
import useStore from '../scripts/store'
import { utils } from '../scripts/utils'
let [useEffectOnce] = [utils.useEffectOnce]

// const checkSessionState = () => {
// 	// Request session token
// }

const NavMenu = (props) => {
	// const users = useStore(state => state.users)

	// useEffectOnce(() => {
	// 	// Redirect to login if session request fails
	// 	if (checkSessionState() === false) {
	// 	  setLocation('/login')
	// 	}
	// }, [])

return (
<div>
	{props.isMain &&
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
		</div>}

	{!props.isMain &&
		<div className='subsite-nav-menu'>
			<Link href='/'>
			<button className='block'>
				Main Menu
			</button>
			<br />
			</Link>
		{props.isBlog &&
			<>
				<br /><>Bloggers</><br /><br />
				<Link href='/blog/ryan'>
				<button className='block'>Ryan</button>
				</Link>
				<br />
			</>}
			{props.isBlogger &&
				<>
					<Link href='/blog'>
					<button className='block'>Bloggers</button>
					</Link>
					<br />
				</>}
		{props.isPortfolio &&
			<>
				<br /><>Portfolios and Résumés</><br /><br />
				<Link href='/portfolio/ryan'>
				<button className='block'>Ryan</button>
				</Link>
				<br />
			</>}
		{props.isSubsite &&
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
)}

export default NavMenu
