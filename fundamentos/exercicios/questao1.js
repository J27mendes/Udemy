//questão 1
/*function teste (nome){
    console.log('Olá ' + (nome) + ' !')
}

teste('leonardo')
teste('Maria')*/
//--------------------------------------------------------------------------------------
//questão 2
/*function diasVividos (idade){
    return idade * 365
}
console.log(diasVividos(41))*/
//--------------------------------------------------------------------------------------
//questão 3
/*function calcularSalario(horas, salario){
    return `Salário é igual a R$ ${(horas * salario).toFixed(2)}`
}
console.log(calcularSalario(176, 6.82))*/
//-------------------------------------------------------------------------------------
//questão 4
 /*function nomeMes(mes){
    switch (mes){
        case 1: console.log('Janeiro')
        break

        case 2: console.log('Fevereiro')
        break

        case 3: console.log('Março')
        break

        case 4: console.log('Abril')
        break

        case 5: console.log('Maio')
        break

        case 6: console.log('junho')
        break

        case 7: console.log('Julho')
        break

        case 8: console.log('Agosto')
        break

        case 9: console.log('Setembro')
        break

        case 10: console.log('Outubro')
        break

        case 11: console.log('Novembro')
        break

        case 12: console.log('Dexembro')
        break

        default: console.log('Este mês não existe')
    }
}
nomeMes(100)*/
//----------------------------------------------------------------------------------
//questão 5
/*function verificar(x, y){
    if(x > y){
        console.log(`${x} é maior que ${y}`)

    } else if(x == y){
        console.log(`${x} é igual a ${y}`)
    } else {
        console.log(`${y} é maior que ${x}`)
    }
}

verificar(2,20)*/
//----------------------------------------------------------------------------------
//questão 6
/*function inverso(valor){
    const tipo = typeof valor
    /*if(tipo == "boolean") return !valor*///return `O parametro é do tipo ${tipo}`
    /*else if (tipo == "number") return -valor *///return `O parametro é do ${tipo}`
    /*else
    return `O parâmetro é do tipo ${tipo}`*/
//}
//console.log(inverso(`tipos`))
//--------------------------------------------------------------------------------
//questao 7

/*function entreNumeros(numero, minimo, maximo, inclusivo = false){   
    if(inclusivo) return numero >= minimo && numero <= maximo
    
    return  numero > minimo && numero < maximo
    
}
console.log(entreNumeros(20, 10, 98))*/
//--------------------------------------------------------------------------------
//questao 8
/*function multiplicacao(primeiro, segundo){
    return primeiro * segundo
}   
console.log(multiplicacao(3,5))*/
//--------------------------------------------------------------------------------
//questão 9
/*function multiplicar(nA, nB){
    let resultado = 0
    for(let i = 0; i < nB; i++)
            resultado += nA        
    return resultado
}
console.log(multiplicar(3, 4))*/
//--------------------------------------------------------------------------------
//questão 10
/*function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
}

console.log(repetir(27, 2))*/
//questão 11
/*function mais(simbolo){
    let mais = ''
    for(let i = 0; i <= simbolo; i++){
        mais += '+'
    }  
    return mais
}
console.log(mais(8))
*/
/*function simboloMais (quantidade){
    return Array(quantidade).fill('+').join('')
}
console.log(simboloMais(2))*/
/*function simboloMais(quantidade){
    return "+".repeat(quantidade)
}
console.log(simboloMais(4))*/
//-------------------------------------------------------------------------
//questão 12
/*let vetor = ['b', 'u', '15', 'yes']
function recebendo(parametro){
    const elemento1 = parametro.shift()
    const elemento2 = parametro.pop()
    return [elemento1, elemento2]
}
console.log(recebendo(vetor))*/
/*let e = [2, 15, 'pão', false]
function receberPrimeiroUltimo(elemento){
    const primeiro = 0
    const ultimo = elemento.length -1
    const p = elemento[primeiro]
    const u = elemento[ultimo]
    return [p, u]
}
console.log(receberPrimeiroUltimo(e))*/
/*let vetor = [true, '59', 27, 'é hoje']
function pEu([primeiroElemento, ... elementosRestantes]){
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
}

console.log(pEu(vetor))*/
//------------------------------------------------------------------------
//questão 13
/*function removerPropriedade(objeto, nomeDaPropriedade){
    const copia = Object.assign({}, objeto)
    console.log(copia)
    delete copia[nomeDaPropriedade]
    return copia
}
/*function removerPropriedade(objeto, nomeDaPropriedade){
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))
console.log(removerPropriedade({id: 20, nome: "caneta", descricao: "Não preenchido"},"descrição"))*/
//-----------------------------------------------------------------------------------------
//questão 14
    /*function filtrarNumeros(array){
       const resultado = []
       for(let item of array)
       if(typeof item === "number")
       resultado.push(item)
       return resultado
      }
   console.log(filtrarNumeros(["Javascript", 27, "69", true, "web", 11]))
   console.log(filtrarNumeros("a", "d"))*/
//---------------------------------------------------------------------------------------------------   
//questão 15
/*function convertendoEmArray(objetos){
    const resultado = []
    for(let chave in objetos)
    resultado.push([chave, objetos[chave]])
    return resultado
}
console.log(convertendoEmArray({nome: "Maria",sobrenome: "da penha"}))*/
/*function objetoParaArray(objeto){
    return Object.entries(objeto)
}
console.log(objetoParaArray({nome: "Maria",sobrenome: "da penha"}))*/
//-----------------------------------------------------------------------------------------------------
//questão  15
/*function tudoPar(array){
    let numeros = []
    for(let i = 0; i <= array.length; i +=2){
        const numeroPar = array[i] % 2 == 0
    if(numeroPar)
        numeros.push(array[i])
    }
    return numeros
}
console.log(tudoPar([1, 2, 15, 32, 56, 57, 69, 70, 80, 85, 99]))*/
/*function receberIndicesPares(numeros){
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
}

console.log(receberIndicesPares([1, 2, 15, 32, 56, 57, 69, 70, 80, 85, 99]))*/
//-------------------------------------------------------------------------------------------------------
//questão 16
/*function ano(bissexto){
    const divisivelP4 = bissexto % 4 == 0
    const divisivelP100 = bissexto % 100 == 0
    const divisivelP400 = bissexto % 400 == 0
    
    return (divisivelP4 && !divisivelP100) || divisivelP400
}

console.log(ano(664))*/

// checa-se indiretamente, verificando se o mês de fevereiro do dado tem 29 anos
/*function checarAnoBissexto(ano){
    return new Date(ano, 1, 29).getDate() === 29
}
console.log(checarAnoBissexto(2020))*/
//-----------------------------------------------------------------------------------------------------
//questão 17
/*function soma(numeros){
    const tudo = numeros.length
        return (tudo === 0) ? 0 : numeros[0] + soma(numeros.slice(1))    
}*/
/*function soma(numeros){
    let tudo = 0
    numeros.forEach(element => tudo += element)
        return tudo        
}*/
/*function soma(numeros){
    const tudo = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    return tudo
}
console.log(soma([1, 2, 3, 5, 10, 14, 15]))*/
//----------------------------------------------------------------------------------------------------
//questão 18
/*function despesasTotais(precos){
    let soma = 0
    for(let item of precos)
        soma += item.preco
    return soma   
}*/
/*function despesasTotais(itens){
    return itens
    .map(e => e.preco)
    .reduce((acumulador, valor) => acumulador + valor)
}*/
/*function despesasTotais(itens){
    return itens.reduce((acumulador, valor) => acumulador + valor.preco, 0 )
}
console.log(despesasTotais([{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 100.56}]))*/
//------------------------------------------------------------------------------------------------------
//questão 19
/*function calcular(media){
    const quantidadeNumeros = media.length
    let somaTotal = 0
        for(i of media){
            somaTotal += i 
        }
    return somaTotal / quantidadeNumeros

}
console.log(calcular([9, 10, 6, 56, 8, 27, 98, 25]))*/

/*function calcularMedia(numeros){
    const quantidadeNumeros = numeros.length
    const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)

    return somaTotal / quantidadeNumeros
}
console.log(calcularMedia([9, 10, 6, 56, 8, 27, 98, 25]))*/
//-------------------------------------------------------------------------------------------------------
//questão 20
/*function triangulo(base, altura){
    const res = (base * altura) / 2
    
    return res.toFixed(2)
}

console.log(triangulo(6.1185, 6.548))*/
//-------------------------------------------------------------------------------------------------------
//questão 21
/*function menor(array){
        let res = array[0]
        for(let i in array)
           if(array[i] < res)
               res = array[i]
            
         return res
}*/
/*function menor(numero){
    return numero.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}*/
/*function menor(numero){
    return Math.min(...numero)
}
console.log(menor([9, 10, 6, 56, 8, 27, 98, 25]))*/
//----------------------------------------------------------------------------------------------------------
//questão 22
/*function sorte(numeroAleatório){
    let sorteio = Math.random()*3
    let resultado = Math.round(sorteio)
    if(numeroAleatório == resultado){
        return `parabéns você acertou o número aleatório que foi ${resultado}`
    } else { 
        return `Que pena!! o número sorteado foi ${resultado}`
    }
}
console.log(sorte(1))*/

/*mais informações sobre gerar números aleatórios dentro de uma certa faixa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */

/*function funcaoDaSorte(numeroAleatorio){
    const min = 1
    const max = 4
    const numeroEscolhido = Math.floor(Math.random() * (max - min + 1) + min)
    
    return (numeroEscolhido === numeroAleatorio ?
        `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
        `Que pena, o número sorteado foi o ${numeroAleatorio}`
        )
    }

console.log(funcaoDaSorte(4))*/
//------------------------------------------------------------------------------------------------
//questão 23
/*function contandoLetras(palavra){
    const teste = palavra.split(" ")
    const palavra1 = teste
    if(teste.length > 1){
        return `Está frase tem ${teste.length} palavras -> ${palavra}`
    } else {
        return `Isto é uma palavra -> ${palavra1}`
    }
}
console.log(contandoLetras("está frase é de verdade"))*/
//---------------------------------------------------------------------------------------------------------------
//questão 24
/*function caractere(letra, frase){
    let contador = 0
    for (let i = 0; i < frase.length; i++)
       if (frase.charAt(i) === letra)
       contador++
       return contador
}
console.log(caractere("a", "lindo demais esse dia"))*/
/*function contarCaractere(caractereBuscado, frase) {
    //return [...frase].filter(caractere => caractere === caractereBuscado).length
    return [...frase].filter(caractere => caractere === caractereBuscado)
    // retorna uma array com os elementos buscados
    }
    console.log(contarCaractere("l", "lindo demais esse dia"))*/
    //--------------------------------------------------------------------------------------------
    //questão 25
    /*function buscandoPalavras(inicio, palavras){
        const resultado = []

        for(let e of palavras)
          if(e.includes(inicio))
          resultado.push(e)

        return resultado   
    }
    console.log(buscandoPalavras("com", ["comendo", "contendo", "jacomeu", "composição", "boca"]))
    console.log(buscandoPalavras("vac", ["bar", "gatovaca", "varanda", "petróleo", "vacina", "vacúo"]))*/

    /*function buscarPalavrasSemelhantes(inicio, palavras){
        return palavras.filter(palavra => palavra.includes(inicio))
    }

    console.log(buscarPalavrasSemelhantes("com", ["comendo", "contendo", "comercializando", "composição", "boca"]))
    console.log(buscarPalavrasSemelhantes("vac", ["bar", "vaca", "varanda", "petróleo", "vacina", "vacúo"]))*/

    //questão 26
    /*function somenteVogais(vogais){
        const palavras = ["a", "e", "i", "o", "u"]
        for(let i = 0; i < vogais.length; i++){
        palavras.forEach( letras => vogais = vogais.replace(letras, ''))
        // sem o for remove apenas 1 letra de cada
            }
    return vogais
    }

    function removerVogais(frase) {
        return frase.replace(/[aeiou]/ig, '')
        }
        console.log(somenteVogais('dormir com hugo no iris do seu olho de abelha de elfo'))
    console.log(removerVogais('dormir com hugo no iris do seu olho de abelha de elfo'))*/
//------------------------------------------------------------------------------------------------------------
    //questão 27
    /*function inverter(primeiro){
        let inversao = {}
            Object.entries(primeiro).forEach(chaveValor => {
                const chave = 0,
                valor = 1
                inversao[chaveValor[valor]] = chaveValor[chave]
       })
       return inversao
    }*/

    /*function inverter(objeto){
        const chaveValor = Object.entries(objeto).map(inversao => inversao.reverse())
    
        return Object.fromEntries(chaveValor)
        //retornando somente chaveValor, retorna um array
    }
    console.log(inverter({a: 1, b: 2, c: 3}))*/
    //---------------------------------------------------------------------------------------
    //questão 28
    /*function quantidadeDigitos(array, digitos){
        let resultado = []
        for(i of array){
        const digito = String(i).length
        
        if(digito === digitos){
        resultado.push(i)
        }
    }
    return resultado
}
    console.log(quantidadeDigitos([38, 2, 365, 1, 10, 125], 2))
    console.log(quantidadeDigitos([5, 9, 1, 125, 11, 56], 3))*/
    //------------------------------------------------------------------------------------------------
    //questão 29
    /*function segundoMaior(retorno){
        let ordenar = retorno.sort(function(a, b){
            return b - a
        })
            return `Em ordem decrescente ${ordenar} e o segundo elemento ${ordenar[1]} `
    }
    
    console.log(segundoMaior([38, 2, 365, 1, 10, 125]))*/

    /*function segundoMaior(numeros){
        let indiceDoMaior = 0
        let segundoMaior

        numeros.forEach((numero, indice) => {
            if(numero > numeros[indiceDoMaior])
            indiceDoMaior = indice
        })

        numeros.splice(indiceDoMaior, 1)
        segundoMaior = numeros[0]

        numeros.forEach(numero => {
            if(numero > segundoMaior)
            segundoMaior = numero
        })
        return segundoMaior        
    }
    console.log(segundoMaior([38, 2, 365, 1, 10, 125]))*/

    /*function segundoMaior(numeros){
        const maior = Math.max(...numeros)
        numeros = numeros.filter(numero => numero != maior)
        const segundoMaior = Math.max(...numeros)

        return segundoMaior
    }

    console.log(segundoMaior([38, 2, 365, 1, 10, 125]))*/

    /*function segundoMaior(numeros){
        const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
        const segundoMaior = numerosOrdenados[1]

        return segundoMaior
    }
    console.log(segundoMaior([38, 2, 365, 1, 10, 125]))*/
//questão 30
/*const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function calculoMedia(estudantes){
    const estudantesMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0,
        valor = 1
        return {nome: estudante[chave], media: media(estudante[valor])}
    })
    const estudantesOrdenados = estudantesMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}
console.log(calculoMedia({Joao: [8, 7, 7, 6],
Mariana: [9, 6, 7, 8],
Carla: [7, 8, 8, 9]
}))*/

//opera 20 horas e para 4 horas pc a
//opera 40 horas e e para 8 horas pc b

// começaram a operar ao meio dia de segunda-feira e são desligados ao meio dia de sabado

//quais dias da semana o pc a e o b estavam em repouso

/*let computadorA = [21, 22, 23, 24, 45, 46, 47, 48, 69, 70, 71, 72, 93, 94, 95, 96, 117, 118, 119, 120, 141, 142, 143, 144]
let computadorB = [41, 42, 43, 44, 45, 46, 47, 48, 89, 90, 91, 92, 93, 94, 95, 96]
let elemento = [] 

function busca(pca, pcb){       
return elemento = pcb.filter(elemento => pca.includes(elemento))
}

function dia(mes){
for(let i = 0; i <= mes.length; i++){
   if(mes[i] <= 12){
        console.log(`hoje é segunda-feira ${mes[i]}`)
    } else if(mes[i] >= 13 && mes[i] <=37){
        console.log(`hoje é terça-feira ${mes[i]}`)
    } else if(mes[i] >=38 && mes[i] <= 61){
        console.log(`hoje é quarta-feira ${mes[i]}`)
    } else if(mes[i] >=62 && mes[i] <=85){
        console.log(`hoje é quinta-feira ${mes[i]}`)
    } else if(mes[i] >=86 && mes[i] <=109){
        console.log(`hoje é sexta-feira ${mes[i]}`)
    } else if(mes[i] >=110 && mes[i] <=122){
        console.log(`hoje é sábado ${mes[i]}`)
    }
  }
}
 
console.log(busca(computadorA, computadorB))
dia(elemento)*/


