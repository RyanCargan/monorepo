import React from 'react'
import { Route } from 'wouter'

// Components
import NavMenu from './NavMenu'
import Collection from './Collection'
import CanvasContainer from './CanvasContainer'
// MDX Components
import Landing from './Landing.mdx'

const RouteList = () => {
	return (
		<div>
			<Route path='/'>
				<NavMenu isMain={true}/>
				<>Home</>
			</Route>
			<Route path='/blog'>
				<NavMenu/>
				<Landing  N={2.0} />
			</Route>
			<Route path='/collection'>
				<NavMenu/>
				<Collection var1='world!' />
			</Route>
			<Route path='/portfolio'>
				<NavMenu/>
				<div>
				???
				</div>
			</Route>
			<Route path='/portfolio/:name'>
				<NavMenu/>
				{(params) => <div>Hello, {params.name}!</div>}
			</Route>
			<Route path='/subsite'>
				<NavMenu/>
				<>Subsites</>
			</Route>
			<Route path='/subsite/bitrot'>
				<NavMenu/>
				<CanvasContainer />
			</Route>
		</div>
	)
}

export default RouteList;
