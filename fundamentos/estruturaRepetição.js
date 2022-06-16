/*function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 3)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

//estrutura de repetição do while

function sorteioAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)    
}

let sorteio //somente iniciada a variavel, sem valor inicial
do {
    sorteio = sorteioAleatorio(-1, 5)
    console.log(`O número sorteado foi ${sorteio}`)
} while (sorteio != -1)


let contador = 1
while(contador <= 10){
    console.log(`contador  = ${contador}`)
    contador++
}
//estrutura de repetição for
for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}

for (let j in notas){
    console.log(j, notas[j])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'marcal',
    idade: 34,
    peso: 60
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
*/