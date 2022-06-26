import React, { useState, useEffect } from 'react'
import { useTransition, animated, config, easings } from '@react-spring/web'
import { Waypoint } from 'react-waypoint'
import { Link } from 'wouter'

// Custom Components
import FadeIn from '../../animation/FadeIn'
// import FadeOut from '../../animation/FadeOut'

const Articles = () => {
	const [topic, setTopic] = useState(0)

	const transition = useTransition(topic, {
		// from: { x: -100, y: 800, opacity: 0 },
		// enter: { x: 0, y: 0, opacity: 1},
		// leave: { x: 100, y: 800, opacity: 0},
		from: {opacity: 0},
		enter: {opacity: 1},
		leave: {opacity: 0},
		delay: 200,
		easing: easings.easeInOutQuart,
    	// config: config.molasses,
	})

	// useEffect(() => {
	// 	// if (topic) {
	// 	//   document.body.classList.add("animation")
	// 	// } else {
	// 	//   document.body.classList.remove("animation")
	// 	// }
	// 	document.body.classList.add("animation")
	// 	setTimeout(() => {
	// 		document.body.classList.remove("animation")
	// 	}, 1000)
	// }, [topic])
	// // useEffect( () =>{
	// // 	document.body.classList.remove("animation")
	// // }, [] )

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
	className='header-block'>General Programming</button>
	<br />

	<div className='list-container'>
	{transition((style, item) =>
		item === 1 ?
		<animated.div style={style} className='list-group'>
		<Link href='/blog/ryan/tdd'>
		<button className='list-block'>Test-Driven Design</button>
		</Link>
		<br />
		</animated.div>
		:''
	)}
	</div>

	<button
	onClick={() => {
		if (topic === 2)
			setTopic(0)
		else
			setTopic(2)
	}}
	className='header-block'>Java</button>
	<br />

	{/* TODO: Replace with map */}
	<div className='list-container'>
	{transition((style, item) =>
		item === 2 ?
		<animated.div style={style} className='list-group'>
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
		</animated.div>
		:''
	)}
	</div>
</div>
)
}

export default Articles;
