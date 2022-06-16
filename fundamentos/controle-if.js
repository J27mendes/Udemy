function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})

//estruturas de controle
function teste1(num){
    if(num > 7)
    console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {//cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)
// if{}else

const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
        } else {
            console.log('Reprovado!')
        }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')// cuidado com erros!

//ifElseIF
Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim 
}

const imprimirNotas = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirNotas(-2)
imprimirNotas(2.3)
imprimirNotas(5)
imprimirNotas(7.8)
imprimirNotas(10)