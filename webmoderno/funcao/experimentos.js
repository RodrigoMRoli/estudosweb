function narcissistic(valor) {
    /* ideia: pegar o valor e pegar o exponte que é o length do valor => 
    transformar o valor em um array utilizando um loop for para cada dígito
    pegar essa array e comçar a algebra + programação */
    let sValor = valor.toString()
    let expoente = sValor.length
    let arrValor = []
    for(let i = 0; i < expoente; i++){
        let digito = sValor.charAt(i)
        arrValor.push(digito)
    }
    // agora vem a questão do que seria melhor: Tirar os valores da array e colocar em let
    // ou operar na array? Vou operar a Algebra em arrays para fins de prática, mas não sei
    // qual é mais optimizado
    
    // numero de indexes dentro da array é = expoente; orientação da array total é = expoente - 1
    valorMod = 0
    arrValor.forEach(algebra)
    function algebra(element, index, array){
        console.log("element = " + element + ", index = " + index + ", array = " + array + ", expoente = " + expoente)
        valorMod = valorMod + Math.pow(element, expoente)
        console.log(valorMod)
    }
    return valor == valorMod
}


//console.log(narcissistic(1634))
console.log(narcissistic(1633))
//console.log(narcissistic(153))
//console.log(narcissistic(371))
//console.log(narcissistic(7))
