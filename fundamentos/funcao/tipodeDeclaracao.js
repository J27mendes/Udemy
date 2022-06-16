//no caso de usar function declaration é possivel chamar a função antes dela
//pois o javascript carrega as funções antes de executar o código

console.log(soma(3,4))

//function declaration
function soma(x, y){
    return x + y
}

//function expression
//já na function expression só é possível chmar a função depois da sua declaração 
const sub = function (x, y){
    return x- y
}

//named function expression
const mult = function mult(x, y){
    return x * y
}

console.log(sub(4, 5))
console.log(mult(5, 5))
