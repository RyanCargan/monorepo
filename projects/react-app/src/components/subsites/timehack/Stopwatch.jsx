// import { current } from 'immer'
import React, { useState, useEffect } from 'react'
import addNotification from 'react-push-notification'
import { beep, sounds } from './sounds'

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

const pushMsg = (laps) => {
	addNotification({
		title: 'Lap Complete',
		// subtitle: `Currently on Lap: ${laps}`,
		message: `Current Lap: ${laps}`,
		theme: 'red',
		native: true // when using native, your OS will handle theming.
	})
}

const Stopwatch = (props) => {
	const [time, setTime] = useState(0)
	const [running, setRunning] = useState(false)
	const [end, setEnd] = useState(0)
	const [laps, setLaps] = useState(0)
	const [placeholder, setPlaceholder] = useState('Enter lap length')

	async function handleChange(e) {
		await setEnd(e.target.value)
		// console.log(end)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		if(!e) return
		// const result = e.target.value.replace(/\D/g, '')
		const result = e.target.value
		// setEnd(parseInt(e.target.value))
		if (result) {
			await setEnd(result)
		}
		console.log(e)
		// console.log(result)
		console.log(end)
	}
	// const handleSubmit = (e) => () => {
		// e.preventDefault()
		// if(!e) return
		// const result = e.target.value.replace(/\D/g, '')
		// const result = parseInt(e.target.value)
		// setEnd(parseInt(e.target.value))
		// setEnd(result)
		// console.log(e.target.value)
		// console.log(result)
		// console.log(end)
	// }
	// const handleReset = () => {
	// 	Array.from(document.querySelectorAll("input")).forEach(
	// 	  input => (input.value = "")
	// 	)
	// 	this.setState({
	// 	  itemvalues: [{}]
	// 	})
	// }

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
				// beep()
				sounds.snd1.play()
				pushMsg(currentLaps)
			}
		  }, 10)
		} else if (!running) {
		  clearInterval(interval)
		}

		return () => clearInterval(interval)

	  }, [running])

	  useEffect(()=> {
        // Here we will have the correct value for 'end'
		console.log(end)
    },[end])

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
					setRunning(false)
					setTime(0)
					// setEnd(0)
					setLaps(0)
					beep()
				}}>Reset</button>
				{/* <input onChange={handleChange}/> */}
				<form onSubmit={(e) => handleSubmit(e)}>
					<div>
						<h3>Current Interval: {end}</h3>
						<h3>Current Laps: {laps}</h3>
						<label htmlFor="intervalInput">Interval:</label>
						<input id="intervalInput" type="text" placeholder={placeholder} required onChange={(e) => handleChange(e)} />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	)

}

export default Stopwatch
