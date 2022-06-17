// import { process } from "https://deno.land/std@0.127.0/node/process.ts"

// Custom higher-order functions
// Array.prototype.reduce = function(callback, initialValue) {
// 	console.log('Custom reduce executing...')

// 	if (!this.length && initialValue === undefined) {
// 		throw new TypeError('Reduce of empty array with no initial value')
// 	}

// 	let accumulator = initialValue
// 	let index = 0

// 	if (initialValue === undefined) {
// 		accumulator = this[0]
// 		index = 1
// 	}

// 	for (; index < this.length; index++) {
// 		accumulator = callback.call(this, accumulator, this[index], index, this)
// 	}

// 	return accumulator
// }
// function reduce (arr, init = 0) {
// 	const reducer = arr.reduce(function (accumulator, current, index, array) {
// 		console.log(current, this)
// 		return accumulator + current
// 	}, init)
// 	return reducer
// }

// function reduce ([head, ...last], fn, init) {
// 	function reducer([head, ...last], fn, init) {
// 		if (head === undefined) return init
// 		fn(init, head)
// 		return reducer(last, fn, init)
// 	}
// 	return reducer(last, fn, init)
// }

function fold([head, ...last], fn, init) {
	if (head === undefined) return init
	fn(init, head)
	return fold(last, fn, init)
}

/*Section causes bug*/
// function addToSet(a, b) {
// 	a.add(b)
// }
// let set = new Set
// const a = fold([1, 2, 4, 6, 4, 3, 1, 2, 5, 1, 3, 4, 5, 7, 7, 8, 10], addToSet, set)
// console.log(a)
// console.log([...a])

// Custom node-based data structures

export const dsa = {
//  og: process.nextTick, // Wrap tail calls with this to guard against stack overflows
	fold: fold,
}
