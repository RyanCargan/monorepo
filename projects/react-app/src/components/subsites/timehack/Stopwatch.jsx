import { current } from 'immer'
import React, { useState, useEffect } from 'react'
import { beep } from './beep'

let currentTime = 0
let currentLaps = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function multiBeep(n) {
// 	for (let i = 0; i < n; i++) {
// 		beep().play
// 		sleep(100)
// 	}
// }

const Stopwatch = () => {
	const [time, setTime] = useState(0)
	const [running, setRunning] = useState(false)
	const [end, setEnd] = useState(0)
	const [laps, setLaps] = useState(0)

	function handleChange(event) {
		setEnd(event.target.value)
		console.log(end)
	}

	currentTime = time
	currentLaps = laps

	useEffect(() => {
		let interval

		if (running) {
		  interval = setInterval(() => {
			setTime((prevTime) => prevTime + 10)
			// console.log(currentTime)
			console.log(currentLaps)
			if ((end > 0) && currentTime === (end * 1000)) {
				setTime(0)
				setLaps((laps) => laps + 1)
				beep()
			}
		  }, 10)
		} else if (!running) {
		  clearInterval(interval)
		}

		return () => clearInterval(interval)

	  }, [running])

	return (
		<div className="stopwatch">
			<div className="numbers">
				<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
				</div>
				<div className="buttons">
				<button onClick={() => {
					setRunning(true)
					beep()
				}}>Start</button>
				<button onClick={() => {
					setRunning(false)
					beep()
				}}>Stop</button>
				<button onClick={() => {
					setTime(0)
					beep()
				}}>Reset</button>
				<input placeholder="Repeat after this many seconds" onChange={handleChange}/>
			</div>
		</div>
	)

}

export default Stopwatch
