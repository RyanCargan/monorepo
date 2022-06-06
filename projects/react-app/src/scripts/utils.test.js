import { utils } from "./utils.js"
let [og] = [utils.og]

;(() => {
	let then = process.hrtime.bigint()
	let ct = 0
	const MAX = 1000_000

	// tail-recursive function
	const recurse = (cb) => {
		if (++ct > MAX) {
			return cb(ct)
		}
		og(() => recurse(cb))
	}

	recurse((ct) => {
		const now = process.hrtime.bigint()
		const nanos = now - then
		const runtime = Number(nanos) / 1_000_000_000
		ct--
		console.log("Recursion: " + JSON.stringify({ ct, runtime }))
	})

	// iterative function
	ct = 0
	then = process.hrtime.bigint()

	const A = () => {
	fp = B
	}

	const B = () => {
	fp = A
	}

	let fp = B

	for (; ;) {
		if (++ct > MAX) {
			const now = process.hrtime.bigint()
			const nanos = now - then
			const runtime = Number(nanos) / 1_000_000_000
			ct--
			console.log("Loop: " + JSON.stringify({ ct, runtime }))
			break
		}
		fp()
		continue
	}
})()
