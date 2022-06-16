/*function pessoa(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000000)
}

new pessoa
*/
//ARROWFUNCTION.JS

let comparaComThis = function(param){
    console.log(this===param)
}

comparaComThis(globalThis)
//no Browser in console
comparaComThis (Window)
/* cuidado para quando passar atributos para o this porque está mechendo no escopo global*/
const obj = {
    comparaComThis = comparaComThis.bind(obj)
    }

    comparaComThis(global)

    comparaComThis(obj)

    let comparaComThisArrow = param
    console.log(this===param)
    comparaComThis(global)
    comparaComThisArrow(this)
    comparaComThisArrow(module.exports)
    comparaComThisArrow = comparaComThis.bind(obj)
    comparaComThis(module.exports)
