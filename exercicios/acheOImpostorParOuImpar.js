function findOutlier(integers){
    Odd = []
    Even = []
    integers.forEach(findOdd)
    function findOdd (element) {
        element % 2 === 0 ? Even.push(element) : Odd.push(element)
    }
    return Odd.length > Even.length ? Even[0] : Odd[0]
}

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))
// arrays exemplo -> [2, 4, 0, 100, 4, 11, 2602, 36], [160, 3, 1719, 19, 11, 13, -21]
// 1 -> Should return: 11 (the only odd number), 2-> Should return: 160 (the only even number)