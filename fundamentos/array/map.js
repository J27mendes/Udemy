/*const nums = [1, 2, 3, 4, 5 ]

//for com prpósito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)
//a função map gera um novo array

const soma10 = e => e + 0.5
const triplo = e => e * 3.87
const dinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(dinheiro)
console.log(resultado)
-------------------------------------------------
map2
*/
/*const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
] 

//Retornar um array com apenas os preços 

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const apenasNome = nome => nome.nome

const res = carrinho.map(paraObjeto).map(apenasNome)
const res2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(res)
console.log(res2)
--------------------------------------------------------
map3*/
/*Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
] 

//Retornar um array com apenas os preços 

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const apenasNome = nome => nome.nome

const res = carrinho.map(paraObjeto).map(apenasNome)
const res2 = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(res2)*/
