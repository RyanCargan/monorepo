import React, { Suspense, useState, useCallback } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import { Canvas } from '@react-three/fiber'
import Engine from './Engine'
import { Html } from '@react-three/drei'

const CanvasContainer = () => {
	const handleCanvas = useFullScreenHandle()

	const [isFullscreen, setIsFullscreen] = useState(false)

	return (
		<div className='canvas-component'>
			<FullScreen handle={handleCanvas}>
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
							{!isFullscreen &&
							<button className='block'
								onClick={() => {
									handleCanvas.enter()
									setIsFullscreen(true)
								}}
							>
								Maximize
							</button>}
							{isFullscreen && 
							<button className='block'
								onClick={() => {
									handleCanvas.exit()
									setIsFullscreen(false)
								}}
							>
								Minimize
							</button>}
						</div>
					</Html>

					<Suspense fallback={null}>
						<Engine />
					</Suspense>
				</Canvas>
			</FullScreen>
		</div>
	)
}

export default CanvasContainer

// TODO: Add event listener with 'window.addEventListener' for 'fullscreenchange' to show "maximize" if document.fullscreenElement is null i.e. fullscreen has been exited without the "minimize" button
