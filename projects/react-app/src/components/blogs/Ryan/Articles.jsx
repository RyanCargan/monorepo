import React, { useState } from 'react'
import {
	// useSpring,
	// animated,
	// useSpringRef,
	useTransition,
} from '@react-spring/web'
import { Waypoint } from 'react-waypoint'
// import { Link, useLocation } from 'wouter'

// Custom Components
import FadeIn from '../../animation/FadeIn'
import FadeOut from '../../animation/FadeOut'

const Articles = () => {
	// const [location, setLocation] = useLocation()
	const [topic, setTopic] = useState(0)
	// const springProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

	// const handler = (n) => {
	// 	setTopic(n)
	// }

	// React-Spring animations for conditonal rendering
	// const [step, setStep] = useState(1)

	// const transRef = useSpringRef()

	// useEffect(() => {
	// 	transRef.start();
	// }, [step])

	// const transitions = useTransition(step, {
	// 	ref: transRef,
	// 	keys: null,
	// 	from: {
	// 		...transition, styles
	// 	},
	// 	enter: { opacity: 1, transform: 'translateX(0px)' },
	// 	leave: {
	// 		...transition, styles
	// 	},
	// 	trail: 300, // this is delay between the leave and enter animation - enter will happen 300ms after leave in this case.
	// 	config: { duration: 150 }
	// })

	const transition = useTransition(topic, {})

return (
<div style={{textAlign: 'center'}}>
	{/* {`The current page is: ${location}`} */}
	<h1>Articles</h1>

	<button
	onClick={() => {
		if (topic === 1)
			setTopic(0)
		else
			setTopic(1)
	}}
	className='header-block'>Java</button>
	<br />

	{topic === 1 &&
	<FadeOut>
	<FadeIn>
	{/* <animated.div style={springProps}> */}
	<div>
	<button className='list-block'>Java's Lineage & Evolution</button>
	<br />
	<button className='list-block'>SQL, JSON & NoSQL Databases</button>
	<br />
	<button className='list-block'>Java, SQL & the Role of JOOQ</button>
	<br />
	<button className='list-block'>Searching & Sorting in Java</button>
	<br />
	<button className='list-block'>Using Built-In Data Structures & Creating New Ones in Java</button>
	<br />
	<button className='list-block'>Polymorphism with Method Overloading & Overriding</button>
	<br />
	<button className='list-block'>Java Threads, Concurrency & Project Loom</button>
	<br />
	<button className='list-block'>The Evolution of Exception Handling in Java</button>
	<br />
	<button className='list-block'>Using Java Collections</button>
	<br />
	<button className='list-block'>Arrays & ArrayLists in Java</button>
	<br />
	<button className='list-block'>The Different Use Cases of Arrays in Programming</button>
	<br />
	<button className='list-block'>The Main Components of the Java Programming Language</button>
	<br />
	<button className='list-block'>Common Object-Oriented Concepts for Job Interviews</button>
	{/* </animated.div> */}
	</div>
	</FadeIn>
	</FadeOut>}
</div>
)
}

export default Articles;
