/*const navios = [
    { nome: 'mahan', tipo: 'contra-torpedeiro', energia: 1430 }, 
    { nome: 'mablehead', tipo: 'cruzador', energia: 2750 }, 
    { nome: 'texas', tipo: 'encouraçado', energia: 4890 }, 
    { nome: 'ranger', tipo: 'porta-aviões', energia: 4500 }, 
    { nome: 'farragut', tipo: 'contra-torpedeiro', energia: 1370 }
]

//abordagem imperativa
let total = 0
for(let i = 0; i < navios.length; i++){
    total += navios[i].energia
}
console.log(total / navios.length)

//abordagem declarativa

const getEnergia = navios => navios.energia
const soma = (total, atual) => total + atual

const completo = navios.map(getEnergia).reduce(soma)
console.log(completo / navios.length)*/