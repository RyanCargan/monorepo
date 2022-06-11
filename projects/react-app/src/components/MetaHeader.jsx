import React from 'react'
import { Helmet } from 'react-helmet-async'

const MetaHeader = () => {
	return (
		<div>
			<Helmet>
				<title>Coding Hermit</title>
				
				{/* Dependencies */}
				<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css'
				/>
				<link
				rel='stylesheet'
				href='https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css'
				/>
      		</Helmet>
		</div>
	)
}

export default MetaHeader
