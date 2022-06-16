/*console.log(module.exports === this)
console.log(module.exports === exports)*/

this.a = 1
exports.b = 2
module.exports.c = 3

/*exports = null
console.log(module.exports)
// o this e o exports são apenas duas referências 
// para o objeto que module.exports aponta
// para mudar o objeto apenas usando o proprio module.exports
exports = {
    nome: 'teste'
}

console.log(module.exports)*/

module.exports = { publico: true}