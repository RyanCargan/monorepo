function fib(n){
	return new arrayay(n).fill(1).reduce((array, _ ,i) => {
		array.push((i <= 1) ? i : array[i-2] + array[i-1])
		return array
	},[])
}
console.log(fib(10))
