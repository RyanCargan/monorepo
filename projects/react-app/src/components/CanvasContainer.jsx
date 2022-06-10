import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Engine from './Engine'
import { Html } from '@react-three/drei'

const CanvasContainer = () => {
	return (
		<>
			{/* <div className='canvas-ui'>
				<button className='block-part'>Maximize</button>
				<br />
				<button className='block-part'>Minimize</button>
			</div> */}
			<Canvas id='engine-container' shadows>
				{/* <group position-z={0} position-x={0}>     
					<Html
						as='div'
						wrapperClass='canvas-ui-main'
						center={true}
					>
					<div className='canvas-ui-menu'>
						<button className='block'>Maximize</button>
						<button className='block'>Minimize</button>
					</div>
					</Html>
				</group> */}

				<Html
					as='div'
					wrapperClass='canvas-ui'
					center={true}
				>
					{/* <>???</> */}
					<div className='canvas-ui-menu'>
						{(1 > 0) &&
						<button className='block'>
							Maximize
						</button>}
						{(1 > 0) && 
						<button className='block'>
							Minimize
						</button>}
					</div>
				</Html>

				<Suspense fallback={null}>
					<Engine />
				</Suspense>
			</Canvas>
		</>
	)
}

export default CanvasContainer
