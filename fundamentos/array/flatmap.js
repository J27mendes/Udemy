/*const navios = [{
    nacao: 'E.U.A', 
    especificacoes:[{ nome: 'mahan', tipo: 'contra-torpedeiro', energia: 1430, armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}},
                    { nome: 'mablehead', tipo: 'cruzador', energia: 2750, armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}},
                    { nome: 'texas', tipo: 'encouraçado', energia: 4890, armamento:{canhoesPrimarios: true, canhoesSecundarios: true, torpedos: false}},
                    { nome: 'ranger', tipo: 'porta-aviões', energia: 4500, armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: false}},
                    { nome: 'farragut', tipo: 'contra-torpedeiro', energia: 1370, armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}}
                   ]
                },
                {
    nacao: 'JAPONESA',
    especificacoes:[{ nome: 'fubuki', tipo: 'contra-torpedeiro', energia: 1445, armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}},
                    { nome: 'fusô', tipo: 'encouraçado', energia: 4789, armamento:{canhoesPrimarios: true, canhoesSecundarios: true, torpedos: false}},
                    { nome: 'shokaku', tipo: 'porta-aviões', energia: 4550, armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}},
                    { nome: 'nagato', tipo: 'encouraçado', energia: 4912, armamento:{canhoesPrimarios: true, canhoesSecundarios: true, torpedos: false}},
                    { nome: 'akatsuki', tipo: 'contra-torpedeiro', energia: 1565, armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}}
                   ]
                },
                {
    nacao: 'ALEMÃ',
    especificacoes:[{ nome: 'lebereth Mass', tipo: 'contra-torpedeiro', energia: 1390, armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}},
                    { nome: 'bayern', tipo: 'encouraçado', energia: 4875, armamento:{canhoesPrimarios: true, canhoesSecundarios: true, torpedos: false}},
                    { nome: 'nunrenberg', tipo: 'cruzador', energia: 2892, armamento:{canhoesPrimarios: true, canhoesSecundarios: false, torpedos: true}},
                    { nome: 'geneisenau', tipo: 'encouraçado', energia: 4200, armamento:{canhoesPrimarios: true, canhoesSecundarios: true, torpedos: true}},
                    { nome: 'bismark', tipo: 'encouraçado', energia: 4998, armamento:{canhoesPrimarios: true, canhoesSecundarios: true, torpedos: false}}
                   ]  
                }     
            ]
            
const getNomeNavio = nome => nome.nome
const getNomes = especificacoes => especificacoes.especificacoes.map(getNomeNavio)

const nomes = navios.map(getNomes)
//console.log(nomes)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const tudo = navios.flatMap(getNomes)
console.log(tudo)*/