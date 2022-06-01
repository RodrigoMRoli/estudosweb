// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let regExp=/[-_]\w/ig
    let strMod = str.replace(regExp, function(comparacao){
        let compararInicial = comparacao.charAt(1).toUpperCase()
        return compararInicial
    })
    return strMod
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))