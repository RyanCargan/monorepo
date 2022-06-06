import React, {useEffect, useRef} from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { utils } from '../scripts/utils'
let [rad] = [utils.getRadians]

/* References
	Azimuth & polar angles:
		https://en.wikipedia.org/wiki/Spherical_coordinate_system
*/

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

	return (
		<>
			<PerspectiveCamera makeDefault position={[0, 1, 5]}/>
			<OrbitControls
				ref={orbitControlsRef}
				minPolarAngle={rad(60)}
				maxPolarAngle={rad(80)}
			/>

			<mesh position={[0, 0.5, 0]}>
				<sphereGeometry args={[0.5, 32, 32]}/>
				<meshStandardMaterial color="#ffffff"/>

			</mesh>
			<mesh rotation={[-rad(90), 0, 0]}>
				<planeGeometry args={[7, 7]}/>
				<meshStandardMaterial color="#1F51FF"/>
			</mesh>
			<ambientLight args={["#ffffff",1]}/>
		</>
	)
}

export default Engine
