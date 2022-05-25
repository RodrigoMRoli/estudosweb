/* essa aula vai ser esse conceito numa array, antes era em um objeto */

const [a] = [10]
console.log(a)

const [a1, a2, a3, a4, a5] = [11, 12, 13, 20]
console.log(a1, a2, a3, a4, a5)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

/* 

uma array pode ter outros elementos do tipo array, no caso uma array de uma array
complicado demais e tentando pensar numa aplicação prática de você usar uma array vazia pulando elementos, complicado. 
mas o conhecimento esta ai, você pode fazer se quiser

*/ 

const [, [, nota]] = [[, 8, 9], [9, 6, 8]]
console.log(nota)