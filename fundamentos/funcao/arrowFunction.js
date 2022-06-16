/*let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}
*/
//quando a function tem apenas 1 unico 
//trabalho, pode retirar o corpo da function {}

dobro = a => 2 * a// return está implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'olá!'
}

ola = ( ) => 'olá'
console.log(ola())