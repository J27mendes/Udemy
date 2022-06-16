//let e const
/*{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
*/
//template string
/*const produto = 'iPad'
console.log(`${produto} é caro`)*/

//destructuring
/*const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)*/

/*const {idade: i, nome} = {nome:'Ana', idade: 9}
console.log(i, nome)*/

//revisão 2
/*const soma = (a, b) => a + b
console.log(soma(4, 5))
//para fazer uma arrow function de uma unica linha, retira-se as chaves e 
//retorno fica implicito
const soma1 = (a, b) => {
    return a + b
}
// e se usar as chaves é obrigatório colocar o return se não o código
// será undefined
console.log(soma1(4,4))*/

//arrow function (this)
/*const lexico1 = () => console.log(this===module.exports)// ou exports
const lexico2 = lexico1.bind({})
lexico1()
lexico2()
*/
//parametro default
/*function log(texto = 'Node'){
console.log(texto)
}
log()
log('Sou mais forte')*/

//operador rest
/*function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 7, 11, 15))*/

//revisão 3
//ES8: Object.value - que vai trazer os valores dos objetos
// Object.entries - que vai trazer chaves e valores
// Object.keys - que vai trazer as chaves do objeto
/*const Obj = {a: 1, b: 2, c: 3}
console.log(Object.values(Obj))
console.log(Object.entries(Obj))
console.log(Object.keys(Obj))*/

/*const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())*/

//class
/*class Animal {}
class Cachorro extends Animal {
    falar (){
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())*/

