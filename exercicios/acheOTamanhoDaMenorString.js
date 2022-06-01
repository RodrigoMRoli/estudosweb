function findShort(s){
    let array = s.split(" ")
    let menorLength = (a, b) => a.length - b.length
    array.sort(menorLength)
    return array[0].length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
console.log(findShort("Let's travel abroad shall we"))