import React, { Suspense } from 'react'
import { Switch, Route } from 'wouter'

// Components
import NavMenu from './NavMenu'
import Collection from './Collection'
const CanvasContainer = React.lazy(() =>
	import('./CanvasContainer'))
// MDX Components
import Demo from './Demo.mdx'
import Landing from './Landing.mdx'

const RouteList = () => {
	return (
	<div>
		{/* <Switch> */}
			<Route path='/'>
				<NavMenu/>
				<Landing/>
			</Route>
			<Route path='/blog'>
				<NavMenu/>
				<Demo  N={2.0} />
			</Route>
			<Route path='/collection'>
				<NavMenu/>
				<Collection var1='world!' />
			</Route>
			<Route path='/portfolio'>
				<NavMenu/>
				<>
					<>Portfolio list. MDX note goes here...</>
				</>
			</Route>
			{/* <Route path='/portfolio/:name'>
				<NavMenu/>
			</Route> */}
			<Route path='/subsite'>
				<NavMenu/>
				<>
					<>Current subsites. MDX note goes here...</>
				</>
			</Route>
			<Route path='/subsite/bitrot'>
				<NavMenu/>
				<Suspense fallback={<>Loading canvas...</>}>
					<CanvasContainer />
				</Suspense>
			</Route>
			<Route path='/subsite/geojot'>
				<NavMenu/>
				<Suspense fallback={<>Loading site...</>}>
					<>Under construction...</>
				</Suspense>
			</Route>
			<Route path='/subsite/speakeasy'>
				<NavMenu/>
				<Suspense fallback={<>Loading site...</>}>
					<>Under construction...</>
				</Suspense>
			</Route>
			<Route path='/subsite/timehack'>
				<NavMenu/>
				<Suspense fallback={<>Loading site...</>}>
					<>Under construction...</>
				</Suspense>
			</Route>
			{/* <Route path='/404'>
				<>404, Not Found!</>
			</Route> */}
		{/* </Switch> */}
		{/* <Switch>
			<Route>{false && '404, Not Found!'}</Route>
		</Switch>	 */}
	</div>
	)
}

export default RouteList;
