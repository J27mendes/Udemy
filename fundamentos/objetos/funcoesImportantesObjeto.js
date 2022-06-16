/*const pessoa = {
    nome: 'Rebeca',
    idade: 17,
    peso: 56
}

/*console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))*/

/*Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)    
    })

Object.entries(pessoa).forEach(([chaves, valor]) => {
    console.log(` ${chaves}: ${valor}`)
})
//do mesmo jeito só que um pouco mais descritivo

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '22/04/2005'
})

pessoa.dataNascimento = '01/02/2014'
//usando writable faz congelar o atributo como o metodo freeze 
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))*/

//object.assign |ECMAScript 2019

/*const dest = {a: 1}
const a1 = {b: 2}
const a2 = {c: 3, a: 4}
const obj = Object.assign(dest, a1, a2) 

console.log(obj)*/