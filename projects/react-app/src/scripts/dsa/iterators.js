// custom reduce
// custom map using reduce
// custom filter using reduce
// parallel reduce with web workers?

function sum(r, a) {
    return Array.isArray(a) ? a.reduce(sum, r) : r + a
}

console.log([
    [1_451_311_100_000, 446],
    [1_342_420_200_000, 644],
    [1_533_432_300_000, 334],
    [1_724_541_400_000, 633],
    [1_815_551_500_000, 221],
    [1_565_571_650_340, 651]
].reduce(sum, 0))

console.log([
    [3, 7, 3, 5, 6, [[[2,3],[3,5]],[6,7,8]]],
    [1, 8, 5, 5, 5, [[12,2],[6,2]]],
    [5, 5, 16, 18, [12, 11, 10, 19]]
].reduce(sum, 0))
