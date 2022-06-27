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
const Stopwatch = lazy(() =>
	import('./subsites/timehack/Stopwatch'))

// MDX Components
// import Demo from './Demo.mdx'
import Landing from './Landing.mdx'
const BlogLanding = Landing
const PortfolioLanding = Landing
import AboutRyan from './portfolios/Ryan/About.mdx'
const SubsiteLanding = Landing
// import BlogLanding from './BlogLanding.mdx'
// import PortfolioLanding from './PortfolioLanding.mdx'
// import SubsiteLanding from './SubsiteLanding.mdx'

// Bloggers
import Arcticle from './blogs/Ryan/Articles'

// TODO: Replace repetitve article imports with batch export & import
// Articles
import Tdd from './blogs/Ryan/articles/Tdd.mdx'
import JavaLineage from './blogs/Ryan/articles/JavaLineage.mdx'
import Databases from './blogs/Ryan/articles/Databases.mdx'
import Jooq from './blogs/Ryan/articles/Jooq.mdx'
import SearchingAndSorting from './blogs/Ryan/articles/SearchingAndSorting.mdx'
import DataStructures from './blogs/Ryan/articles/DataStructures.mdx'
import Polymorphism from './blogs/Ryan/articles/Polymorphism.mdx'
import Concurrency from './blogs/Ryan/articles/Concurrency.mdx'
import ExceptionHandling from './blogs/Ryan/articles/ExceptionHandling.mdx'
import JavaCollections from './blogs/Ryan/articles/JavaCollections.mdx'
import ArrayLists from './blogs/Ryan/articles/ArrayLists.mdx'
import Arrays from './blogs/Ryan/articles/Arrays.mdx'
import Java from './blogs/Ryan/articles/Java.mdx'
import Oop from './blogs/Ryan/articles/Oop.mdx'

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
			{/* Ryan's Articles */}
			<Route path='/blog/ryan/tdd'>
				<NavMenu isBlogger={true}/>
				<Tdd/>
			</Route>
			<Route path='/blog/ryan/java-lineage'>
				<NavMenu isBlogger={true}/>
				<JavaLineage/>
			</Route>
			<Route path='/blog/ryan/databases'>
				<NavMenu isBlogger={true}/>
				<Databases/>
			</Route>
			<Route path='/blog/ryan/jooq'>
				<NavMenu isBlogger={true}/>
				<Jooq/>
			</Route>
			<Route path='/blog/ryan/searching-and-sorting'>
				<NavMenu isBlogger={true}/>
				<SearchingAndSorting/>
			</Route>
			<Route path='/blog/ryan/data-structures'>
				<NavMenu isBlogger={true}/>
				<DataStructures/>
			</Route>
			<Route path='/blog/ryan/polymorphism'>
				<NavMenu isBlogger={true}/>
				<Polymorphism/>
			</Route>
			<Route path='/blog/ryan/concurrency'>
				<NavMenu isBlogger={true}/>
				<Concurrency/>
			</Route>
			<Route path='/blog/ryan/exception-handling'>
				<NavMenu isBlogger={true}/>
				<ExceptionHandling/>
			</Route>
			<Route path='/blog/ryan/java-collections'>
				<NavMenu isBlogger={true}/>
				<JavaCollections/>
			</Route>
			<Route path='/blog/ryan/arraylists'>
				<NavMenu isBlogger={true}/>
				<ArrayLists/>
			</Route>
			<Route path='/blog/ryan/arrays'>
				<NavMenu isBlogger={true}/>
				<Arrays/>
			</Route>
			<Route path='/blog/ryan/java'>
				<NavMenu isBlogger={true}/>
				<Java/>
			</Route>
			<Route path='/blog/ryan/oop'>
				<NavMenu isBlogger={true}/>
				<Oop/>
			</Route>
			{/* Portfolios */}
			<Route path='/portfolio'>
				<NavMenu isPortfolio={true}/>
				<PortfolioLanding/>
			</Route>
			<Route path='/portfolio/ryan'>
				<NavMenu isPortfolio={true}/>
				<AboutRyan/>
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
					<Stopwatch/>
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
