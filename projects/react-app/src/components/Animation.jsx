import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Animation = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (
	ref.current.rotation.x += 0.03,
	ref.current.rotation.y -= 0.03,
	ref.current.rotation.z += 0.03
  ))

  // Return the view, these are regular Threejs elements expressed in JSX
	return (
		<>
			<mesh
				{...props}
				ref={ref}
				scale={clicked ? 2.5 : 1}
				onClick={(event) => click(!clicked)}
				onPointerOver={(event) => hover(true)}
				onPointerOut={(event) => hover(false)}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={hovered ? 'cyan' : 'orange'} />
			</mesh>
		</>
	);
}

export default Animation;
