function maskify(cc) {
    return cc.toString().slice(-4).padStart(cc.length, "#")
}

console.log(maskify("4556364607935616"))
console.log(maskify("64607935616"))
console.log(maskify("1"))
console.log(maskify(""))
console.log(maskify("Skippy"))
console.log(maskify("Nananananananananananananananana Batman!"))