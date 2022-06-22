import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'wouter'

// Components
import NavMenu from './NavMenu'
import Collection from './utils/Collection'

// Subsites
const CanvasContainer = lazy(() =>
	import('./subsites/bitrot/CanvasContainer'))
const ChatClient = lazy(() =>
	import('./subsites/speakeasy/ChatClient'))

// MDX Components
// import Demo from './Demo.mdx'
import Landing from './Landing.mdx'
const BlogLanding = Landing
const PortfolioLanding = Landing
const SubsiteLanding = Landing
// import BlogLanding from './BlogLanding.mdx'
// import PortfolioLanding from './PortfolioLanding.mdx'
// import SubsiteLanding from './SubsiteLanding.mdx'

// Bloggers
import Arcticle from './blogs/Ryan/Articles'

// Portfolios

const RouteList = () => {
	return (
	<div>
		<Switch>
			{/* Main */}
			<Route path='/'>
				<NavMenu isMain={true}/>
				<Landing/>
			</Route>
			{/* Blogs */}
			<Route path='/blog'>
				<NavMenu isBlog={true}/>
				<BlogLanding/>
			</Route>
			<Route path='/blog'>
				<NavMenu isBlog={true}/>
				<BlogLanding/>
			</Route>
			<Route path='/blog/ryan'>
				<NavMenu isBlogger={true}/>
				<Arcticle/>
			</Route>
			{/* Portfolios */}
			<Route path='/portfolio'>
				<NavMenu isPortfolio={true}/>
				<PortfolioLanding/>
			</Route>
			<Route path='/portfolio/ryan'>
				<NavMenu isPortfolio={true}/>
				<PortfolioLanding/>
			</Route>
			{/* Subsites */}
			<Route path='/subsite'>
				<NavMenu isSubsite={true}/>
				<SubsiteLanding/>
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
			{/* 404 */}
			<Route>404, Not Found!</Route>
			{/* Misc */}
			<Route path='/collection'>
				<NavMenu/>
				<Collection var1='world!' />
			</Route>
		</Switch>
	</div>
	)
}

export default RouteList;
