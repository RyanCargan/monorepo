import React, {useEffect, useRef} from 'react'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { utils } from '../../../scripts/utils'
let [rad] = [utils.getRadians]

const Engine = () => {

	const orbitControlsRef = useRef(null)
	useFrame((state)=> {
		// console.log(state.mouse)
		if (!!orbitControlsRef.current) {
			const {x, y} = state.mouse

			orbitControlsRef.current.setAzimuthalAngle(-x * rad(45))
			orbitControlsRef.current.setPolarAngle((y + 1) * rad(90 - 30))
			orbitControlsRef.current.update()
		}
	})

	useEffect(() => {
		if (!!orbitControlsRef.current) {
			console.log(orbitControlsRef.current)
		}
	}, [orbitControlsRef.current])

	{/* Animation */}
	const objRef = useRef(null)
	useEffect(() => {
		if (!!objRef.current) {
			console.log(objRef.current)

			// Timeline
			const timeline = gsap.timeline({paused: true})

			// X-axis motion
			gsap.to(objRef.current.position, {
				x: 1,
				duration: 2,
				ease: "power1.out"
			}, "")
			// Try gsap.from & gsap.fromTo later

			// Y-axis motion
			gsap.to(objRef.current.position, {
				y: 0.5,
				duration: 0.5,
				ease: "bounce.out"
			}, "<")
		}
	}, [objRef.current])

	return (
		<>
			{/* Camera */}
			<PerspectiveCamera makeDefault position={[0, 1, 5]}/>
			<OrbitControls
				ref={orbitControlsRef}
				minPolarAngle={rad(60)}
				maxPolarAngle={rad(80)}
			/>

			{/* PBR Ball */}
			<mesh position={[-2, 1.5, 0]}
				castShadow
				ref={objRef}
			>
				<sphereGeometry args={[0.5, 32, 32]}/>
				<meshStandardMaterial
					color="#ffffff"
					metalness={0.6}
					roughness={0.2}
				/>
			</mesh>

			{/* Floor */}
			<mesh rotation={[-rad(90), 0, 0]} receiveShadow>
				<planeGeometry args={[20, 20]}/>
				{/* <meshPhongMaterial color="#1F51FF"
					// emissive="#ffffff"
				/> */}
				<meshStandardMaterial color="#1ea3d8"/>
			</mesh>

			<ambientLight args={["#ffffff", 0.25]}/>
			{/* <directionalLight
				args={["#ffffff", 1]}
				position={[-3, 1, 0]}
			/> */}
			{/* <pointLight
				args={["#ffffff", 1]}
				position={[-3, 1, 0]}
			/> */}

			<spotLight
				args={["#ffffff", 1.5, 7, rad(45), 0.4]}
				position={[-3, 1, 0]}
				castShadow
			/>

			{/* Skybox */}
			<Environment background>
				<mesh 
					// scale={100}
				>
					<sphereGeometry
						// args={[1, 64, 64]}
						args={[50, 100, 100]}
					/>
					<meshBasicMaterial
						color="#2266cc"
						side={THREE.BackSide} // Only render the inside of the skybox
					/>
				</mesh>
			</Environment>

			{/* FPS Counter */}
			<Stats
				showPanel={0}
				className="panel-0"
				// parent={useRef<Engine>(null)}
			/>
			{/* <Stats
				showPanel={1}
				className="panel-1"
				parent={null}
			/> */}
		</>
	)
}

export default Engine

/* References
	Azimuth & polar angles:
		https://en.wikipedia.org/wiki/Spherical_coordinate_system
*/
