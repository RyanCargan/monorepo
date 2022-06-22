import React, { useState } from 'react';
// import { Link, useLocation } from 'wouter'

const Articles = () => {
	// const [location, setLocation] = useLocation()
	const [topic, setTopic] = useState(0)

	// const handler = (n) => {
	// 	setTopic(n)
	// }

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

	{topic === 1 && <>
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
	</>}
</div>
);
}

export default Articles;
