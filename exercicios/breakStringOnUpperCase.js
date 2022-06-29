/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasingShift"  =>  "camel Casing"
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

/*function solution(string) {
    regex = /([A-Z])+/g
    arr = [string]
    wordCounter = string.match(regex)
    arr.push(arr[0].slice(0, arr[0].search(wordCounter[0])))
    final = arr.pop() + " "
    wordCounter.forEach(a = (element, index) => {
        if(arr[0].search(wordCounter[index+1])-arr[0].search(element) > 0) {
            arr.push(arr[0].substr(arr[0].search(element), arr[0].search(wordCounter[index+1])-arr[0].search(element)))
        } else {
        arr.push(arr[0].substr(arr[0].search(element)))
        }
        final += arr.pop() + " "
    })
    return final.trim() // input -> camelCasingShift output -> camel Casing Shift
}*/

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
}

console.log(solution("camelCasingShift"))