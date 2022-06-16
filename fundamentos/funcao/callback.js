//padrao observer/*padroes de projeto*/

/*const fabricantes = [ "mercedes", "audi", "bmw"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))*/

//callbacks#1.js

/*const notas = [7.7, 6.5, 5.2, 3.6, 7.1, 9.0]

//sem callback

let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)*/

//COM CallBack
/*const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notasMenorQ7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQ7)
console.log(notasBaixas4)*/

//exemplo de callback no browser

/*document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O Evento Ocorreu com Sucesso!!!')
}*/