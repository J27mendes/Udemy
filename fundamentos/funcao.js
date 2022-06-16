console.log(typeof Object);

class Produto {}
console.log(typeof Produto);
//---------------------------------------------------

function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(5, 982);
imprimirSoma(5);
imprimirSoma(5, 982, 10, 54, 7);
imprimirSoma();

//Função com retorno
function soma(a, b = 8) {
    return a + b
};

console.log(soma(2,3));
console.log(soma(2));
console.log(soma());

//---------------------------------------------------

//armazenando uma função anônima em uma variavel
const calcularSoma = function (a, b){
    console.log(a * b)
};

calcularSoma(52, 7);
//---------------------------------------------------
 
//armazenando uma arrow function em uma variavel
const subtracao = (a, b)=>{
return a - b
}

console.log(subtracao(70, 40));

//----------------------------------------------------
//retorno implicito

const divisao = (a, b) => a / b;
console.log(divisao(25, 5));

//----------------------------------------------------

const imprimir2 = a => console.log(a);
imprimir2('puta')