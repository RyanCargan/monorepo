import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Waypoint } from 'react-waypoint'

const FadeOut = ({ children }) => {
  const [inView, setInview] = useState(false)

  const transition = useSpring({
    // delay: 500,
	delay: 100,
    to: {
      y: !inView ? 0 : 24,
      opacity: !inView ? 1 : 0,
    },
  })

  return (
    <Waypoint onLeave={() => setInview(true)}>
      <animated.div style={transition}>
        {children}
      </animated.div>
    </Waypoint>
  );
};

export default FadeOut
