/*const navios = [
    { nome: 'mahan', tipo: 'contra-torpedeiro', energia: 1430, nacao: 'EUA', armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}},
    { nome: 'mablehead', tipo: 'cruzador', energia: 2750, nacao: 'EUA', armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}},
    { nome: 'texas', tipo: 'encouraçado', energia: 4890, nacao: 'EUA', armamento:{canhoesPrimarios: true, canhoesSecundarios: true, torpedos: false}},
    { nome: 'ranger', tipo: 'porta-aviões', energia: 4500, nacao: 'EUA', armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: false}},
    { nome: 'farragut', tipo: 'contra-torpedeiro', energia: 1370,nacao: 'EUA', armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}}
    
]
const resultado = navios.map(e => e.energia).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(resultado)
----------------------------------------------------
reduce2*//*
const navios = [
    { nome: 'mahan', tipo: 'contra-torpedeiro', energia: 1430, nacao: 'EUA', armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}},
    { nome: 'mablehead', tipo: 'cruzador', energia: 2750, nacao: 'EUA', armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}},
    { nome: 'texas', tipo: 'encouraçado', energia: 4890, nacao: 'EUA', armamento:{canhoesPrimarios: true, canhoesSecundarios: true, torpedos: false}},
    { nome: 'ranger', tipo: 'porta-aviões', energia: 4500, nacao: 'EUA', armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: false}},
    { nome: 'farragut', tipo: 'contra-torpedeiro', energia: 1370,nacao: 'EUA', armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}}
]

// todos navios tem torpedo?
// algum navio tem torpedo?

//const temTorpedo = (resultado, torpedo) => resultado && torpedo
//console.log(navios.map(n => n.armamento.torpedos).reduce(temTorpedo))
 
//const tTorpedo = (res, tem) => res || tem
//console.log(navios.map(n => n.armamento.torpedos).reduce(tTorpedo))
/*------------------------------------
/*Reduce3

/*Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const num = [1, 2, 3, 4, 5, 6, 7]

console.log(num.reduce2(soma))*/
/*Array.prototype.reduce3 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor 
const num = [1, 2, 3, 4, 5]
console.log(num.reduce3(soma, 5))*/
