const pilotos = ['Mansel', 'Prost', 'Senna', 'Piquet']
pilotos.pop()// remove o elemento do final do array
//console.log(pilotos)

pilotos.push('Barrichelo')// adciona 1 elemento no final do array
//console.log(pilotos)

pilotos.shift()//remove o primeiro elemento do array
//console.log(pilotos)

pilotos.unshift('Schummascher')//adciona 1 elemento na primeira posição do array
//console.log(pilotos)

//o metodo splice pode tanto remover, quanto adicionar
pilotos.splice(2, 0, 'Massa')
//console.log(pilotos)

pilotos.splice(3, 1)
//console.log(pilotos)

const gerandoPilotos = pilotos.slice(2)
//o metodo slice gera um novo array passando o indice desejado em diante
//console.log(gerandoPilotos)

const algunsPilotos = pilotos.slice(0,2)
console.log(algunsPilotos)


