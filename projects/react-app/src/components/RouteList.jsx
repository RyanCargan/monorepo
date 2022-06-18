import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'wouter'

// Components
import NavMenu from './NavMenu'
import Collection from './utils/Collection'

const CanvasContainer = lazy(() =>
	import('./subsites/bitrot/CanvasContainer'))
const ChatClient = lazy(() =>
	import('./subsites/speakeasy/ChatClient'))

// MDX Components
import Demo from './Demo.mdx'
import Landing from './Landing.mdx'

const RouteList = () => {
	return (
	<div>
		<Switch>
			<Route path='/'>
				<NavMenu isMain={true}/>
				<Landing/>
			</Route>
			<Route path='/blog'>
				<NavMenu isBlog={true}/>
				<Demo  N={2.0} />
			</Route>
			<Route path='/collection'>
				<NavMenu/>
				<Collection var1='world!' />
			</Route>
			<Route path='/portfolio'>
				<NavMenu isPortfolio={true}/>
				<>
					<>Portfolio list. MDX note goes here...</>
				</>
			</Route>
			<Route path='/subsite'>
				<NavMenu isSubsite={true}/>
				<>
					<>Current subsites. MDX note goes here...</>
				</>
			</Route>
			<Route path='/subsite/bitrot'>
				<NavMenu isSubsite={true}/>
				<Suspense fallback={<>Loading canvas...</>}>
					<CanvasContainer />
				</Suspense>
			</Route>
			<Route path='/subsite/geojot'>
				<NavMenu isSubsite={true}/>
				<Suspense fallback={<>Loading site...</>}>
					<>Under construction...</>
				</Suspense>
			</Route>
			<Route path='/subsite/speakeasy'>
				<NavMenu isSubsite={true}/>
				<Suspense fallback={<>Loading site...</>}>
					<ChatClient/>
				</Suspense>
			</Route>
			<Route path='/subsite/timehack'>
				<NavMenu isSubsite={true}/>
				<Suspense fallback={<>Loading site...</>}>
					<>Under construction...</>
				</Suspense>
			</Route>
			<Route>404, Not Found!</Route>
		</Switch>
	</div>
	)
}

export default RouteList;
