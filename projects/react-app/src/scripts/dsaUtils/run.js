// import './dsaUtils.js'
// import { process } from "https://deno.land/std@0.127.0/node/process.ts"
import { dsa } from './code.js'
// let [og] = [dsa.og]

// HOF tests
// Reduce
// const arr = [1, 2, 3]
// console.log('reduce: ', dsa.reduce(arr))
// console.log('reduce: ', dsa.reduce(arr, ''))
// const reducer = arr.reduce(function (accumulator, current, index, array) {
// 	console.log(current, this)
// 	return accumulator + current
// }, 0)
// console.log('prototypical reduce: ', reducer)

function addToSet(a, b) {
	a.add(b)
}
let set = new Set
const a = dsa.fold([1, 2, 4, 6, 4], addToSet, set)
console.log(a)
// console.log(a)
// console.log([...a]) // Equivalent to above
