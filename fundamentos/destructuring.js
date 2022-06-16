// recurso ES2015
// desestruturacao em objeto
/*const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro:'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome , bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const { conta: {ag, num} } = pessoa
console.log(ag, num)
*/

// desestruturação em um array
/*const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [bicho, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
console.log(bicho)
*/

//desestruturando uma função e utilizando seus recursos
/*function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min:45}
console.log(rand(obj))
console.log(rand({min: 95}))
console.log(rand({}))

//console.log(rand())
*/
//destruturando uma função com array
/*function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    }

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))

//console.log(rand())*/


