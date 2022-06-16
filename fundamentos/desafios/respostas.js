/*function res (x, y){
    console.log((x + y), (x - y), (x * y), (x / y))
}

res(10, 5)*/

/*function triangulos (a, b, c) {
    if(a == b && b == c && a == c){
        console.log("Este triângulo é o Equilatero")
    } else if (a || b == c, a == b){
        console.log("Este triângulo é o Isóceles")
        } else {
            console.log("Este triângulo é o Escaleno")
        }
    }

    triangulos(5, 5, 2)
    triangulos(5, 3, 2)
    triangulos(5, 5, 5)*/

    /*function baseExpoente (base, expoente){
        //metodo novo
        let resultado = base ** expoente
        return resultado
    }
    console.log(baseExpoente(2, 3))*/

    /*function divisao(dividendo, divisor){
        console.log("Resultado:" + Math.floor(dividendo/divisor))
        console.log(`Resto: ${dividendo % divisor}`)
    }

    (divisao(11, 4))*/

    /*function formatarValorDecimal (valorDecimal){
        valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".",",")}`
        console.log(valorEmReais)
    }

    formatarValorDecimal(0.25 + 0.20)*/

    /*function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
        return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
        }

    function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao){
        return capitalInicial * (1 + taxaJuros) ** tempoAplicacao
    }

    console.log(jurosSimples(100, 10/100,2))
    console.log(jurosCompostos(100, 10/100, 2))*/

    /*function bhaskara(ax2, bx, c){
        let resultados = []
        let delta = (bx ** 2) - (4 * ax2 * c)
        if(delta < 0){
            return "Delta é negativo"
        }
        let x1 = (-bx + Math.sqrt(delta))/ 2 * ax2
        let x2 = (-bx - Math.sqrt(delta))/ 2 * ax2
        resultados.push(x1)
        resultados.push(x2)
        return resultados
    }
    
    console.log(bhaskara(1, 3, 2))
    console.log(bhaskara(3, 0, -12))*/

  /*let stringPontos = "10 ,20 ,20 ,8 ,25 ,3 ,0 ,30 ,1"

    function avaliaPontuacoes(stringPontos) {
        let pontuacoes = stringPontos.split(",")
        console.log(pontuacoes)
        let quebraDeRecords = 1
        let piorJogo = 1
        let maiorPontuacao = pontuacoes[0]
        let menorPontuacao = pontuacoes[0]

        for (let i = 1; i < pontuacoes.length; i++){
            if(pontuacoes[i] > maiorPontuacao){
                maiorPontuacao = pontuacoes[i]
                quebraDeRecords++
            } else if (pontuacoes[i] < menorPontuacao){
                menorPontuacao = pontuacoes[i]
                piorJogo = i+1
            }
        }
        return [quebraDeRecords, piorJogo]
    }
    console.log(avaliaPontuacoes(stringPontos))*/

    /*function classificacaoAluno(nota){
        let notaCorrigida = arredondar(nota)
        if(notaCorrigida >= 40){
            console.log(`Aprovado com nota ${notaCorrigida}`)
        } else {
            console.log(`Reprovado com nota ${notaCorrigida}`)
            }
        }

        function arredondar(nota){
            if(nota % 5 > 2){
                return nota + (5 - (nota % 5))
            } else {
                return nota
            }
        }
    
    classificacaoAluno(100)
    classificacaoAluno(30)
    classificacaoAluno(38)
    classificacaoAluno(88)
    classificacaoAluno(63)

    */

    /*function numeroInteiro(divisor){

        if(divisor % 3 == 0){
            return true            
        } else {
            return false
        }
    }

    console.log(numeroInteiro(252))
    console.log(numeroInteiro(27))*/

    /*function bissexto(calculo){
        if(calculo % 4 == 0 && calculo <= 0){
            console.log('Este ano é antes do nascimento de cristo e é bissexto')
            return true        
        } else if(calculo % 4 == 0 && calculo > 0){
            console.log('Este ano é depois do nascimento de cristo e é bissexto')
            return true
        } else if (calculo % 4 != 0 && calculo <= 0){
            console.log('Este ano é antes do nascimento de cristo e não é bissexto')
        } else {
            console.log('Este ano é depois do nascimento de cristo e não é bissexto')
        }
    }

    bissexto(2030)
    bissexto(-40)
    bissexto(-51)
    bissexto(2015)
    bissexto(2016)*/

    /*function fatorial(numero){
        if(numero == 0){
            return 1
        } else {
            return numero * fatorial(numero - 1)
            }
        }
    console.log(fatorial(5))         
    */

    /*const diaSemana = function(dia){
        switch(Math.floor(dia)){
            case 1: console.log('hoje é domingo')
            break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:    
                console.log('hoje é um dia útil')
                break;
            case 7:
                console.log('hoje é sábado')
                break;
            default:
                console.log('deu errado')
        }
    }

    diaSemana(7)*/

    /*const feira = function(frutas){
        switch (frutas){
            case 'maçã' :
            console.log('Não vendemos está fruta aqui!')
            break;
            case 'kiwi': 
            console.log('Estamos com escassez de kiwi!')
            break;
            case 'laranja': 
            console.log('Aqui está, são 3 reais o quilo!')
            break;
            default: console.log('Pedido não encontrado!') 
        }
    }

    feira('maçã')
    feira('kiwi')
    feira('laranja')
    feira('abacaxi')*/

    /*const carro = function(modelo){
        switch(modelo){
            case 'hatch': console.log(`A compra do modelo ${modelo} foi efetuada com sucesso`)
            break;
            case 'sedan': console.log(`Tem certeza que prefere o modelo ${modelo}`)
            break;
            case 'moto': console.log(`Tem certeza que prefere o modelo ${modelo}`)
            break;
            case 'caminhão': console.log(`Tem certeza que prefere o modelo ${modelo}`)
            break;
            default: console.log(`Não trabalhamos com este tipo de automóvel "${modelo}" aqui`)
        }
    }

    carro('hatch')
    carro('sedan')
    carro('moto')
    carro('caminhão')
    carro('bike')*/


    /*const calculadora = function(x, operacao, y){
        switch(operacao){
            case '+':
                return x + y
            case '-':
                return x - y
            case '*':
                return x * y
            case '/':
                return x / y

                default:
                    return 'Operação Inválida'                              

            }
        }

        console.log(calculadora(5, '+', 8))
        console.log(calculadora(30, '-', 15))
        console.log(calculadora(6, '*', 7))
        console.log(calculadora(40, '/', 4))
    */

        /*const funcionario = function(aumento){
            switch(aumento){
                case 'A':
                    return 'Seu salário é R$1200 e vai aumentar R$' + 1200 * 0.10
                case 'B': 
                return 'Seu salário é R$1200 e vai aumentar R$' + 1200 * 0.15
                case 'C': 
                return 'Seu salário é R$1200 e vai aumentar R$'+ 1200 * 0.20
                
                default: 
                return 'Plano Inválido'
                }
            }

            console.log(funcionario('A'))
            console.log(funcionario('B'))
            console.log(funcionario('C'))
            console.log(funcionario('F'))

            -------------------------------------------------------------------------------*/

            /*function calcularReajuste(plano, salarioAtual){
                switch(plano){
                    case 'a':
                        return salarioAtual * 1.1
                    case 'b': 
                        return salarioAtual * 1.15
                    case 'c':
                        return salarioAtual * 1.20
                    default:
                        return 'Plano Inválido'                           
                }
            } 

            console.log(calcularReajuste('a', 1200))
            console.log(calcularReajuste('b', 1800))
            console.log(calcularReajuste('c', 3000))*/

            /*function numeroExtenso(numero){
                switch(numero){
                    case 0:
                        console.log('zero')
                        break;
                    case 1:
                        console.log('um')
                        break;
                    case 2:
                        console.log('dois')
                        break;
                    case 3:
                        console.log('três')
                        break;
                    case 4:
                        console.log('quatro')
                        break;
                    case 5:
                        console.log('cinco')
                        break;
                    case 6:
                        console.log('seis')
                        break;
                    case 7:
                        console.log('sete')
                        break;
                    case 8:
                        console.log('oito')
                        break;
                    case 9:
                        console.log('nove')
                        break;
                    case 10:
                        console.log('dez')
                        break;
                    default:
                        console.log('número fora do intervalo')                                            
                }
            }

            numeroExtenso(0)
            numeroExtenso(1)
            numeroExtenso(2)
            numeroExtenso(3)
            numeroExtenso(4)
            numeroExtenso(5)
            numeroExtenso(6)
            numeroExtenso(7)
            numeroExtenso(8)
            numeroExtenso(9)
            numeroExtenso(10)
            numeroExtenso(11)*/          

/*function lanchonete(codigo){
      
    switch(codigo){
        case 100: 
        console.log('cachorro Quente ' , 'R$ 3.00')
        break;

        case 200:
        console.log('Hambúrguer Simples ', 'R$ 4.00')
        break

        case 300:
        console.log('Chesseburguer ', 'R$ 5.00')
        break

        case 400: 
        console.log('Bauru ', 'R$ 7.50')
        break

        case 500:
        console.log('Refrigerante ', 'R$ 3.50')
        break
         
        case 600:
        console.log('Suco ', 'R$ 2.80')
        break

        default: 'Produto não existe'
    }
}    
lanchonete(500)
------------------------------------------------------------------*/
/*function calcularVenda(codigoProduto, qtd){
    switch(codigoProduto){
        case 100: 
        return `R$ ${(qtd * 3).toFixed(2)}`

        case 200:
        return `R$ ${(qtd * 4).toFixed(2)}`

        case 300:
        return `R$ ${(qtd * 5.5).toFixed(2)}`

        case 400:
        return `R$ ${(qtd * 7.5).toFixed(2)}`

        case 500:
        return `R$ ${(qtd * 3.5).toFixed(2)}`

        case 600:
        return `R$ ${(qtd * 2.8).toFixed(2)}`

        default: 
        return 'Produto não existente'
    }
}
console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 3))
console.log(calcularVenda(300, 6))
console.log(calcularVenda(400, 5))
console.log(calcularVenda(500, 6))
console.log(calcularVenda(600, 7))
*/

/*function sacarDinheiro(valorSaque){
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador2 = 0
    let contador1 = 0
    let valorNota =

    calcularValorNota(valorSaque)
    while (valorSaque >= valorNota){
        switch(valorNota){
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 2:
                valorSaque -= 2
                contador2++
                break
            case 1:
                valorSaque -= 1
                contador1++
                break
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador2, contador1)
}
function calcularValorNota(valorSaque){
    if (valorSaque >= 100){
        return 100
    } else if (valorSaque >= 50){
        return 50
    } else if (valorSaque >= 10){
        return 10
    } else if (valorSaque >= 5){
        return 5
    } else if (valorSaque >= 2){
        return 2
    } else if (valorSaque >= 1){
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador2, contador1){
    let resultado = ''

    if(contador100 > 0){
        resultado += `-{${contador100} nota(s) de R$ 100}-`
    }
    if(contador50 > 0){
        resultado += `-{${contador50} nota(s) de R$ 50}-`
    }
    if(contador10 > 0){
        resultado += `-{${contador10} nota(s) de R$ 10}-` 
    }
    if(contador5 > 0){
        resultado += `-{${contador5} nota(s) de R$ 5}-` 
    }
    if(contador2 > 0){
        resultado += `-{${contador2} nota(s) de R$ 2}-`
    }
    if(contador1 > 0){
        resultado += `-{${contador1} nota(s) de R$ 1}-`
    }
    return resultado
}

console.log(sacarDinheiro(18))*/


//100 reais para todos +
//identificar o valor a ser pago pelo plano conforme idade
//criancas com menos de 10 pagam 80reais
//pessoas de 10 a 30 pagam 50 reais
//pessoas de 30 a 60 pagam 95 reais
//pessoas acima de 60 pagam 130 reais

/*function planoSaude(idade){
    let plano = 100
    if(idade <= 10){
       return plano + 80
    } else if (idade > 10 && idade <=30){
        return plano + 50
    } else if (idade > 30 && idade <=60){
        return plano + 95
    } else if (idade > 60){
        return plano + 130
    }
}

console.log(planoSaude(9))
console.log(planoSaude(20))
console.log(planoSaude(49))
console.log(planoSaude(69))*/

//é acrescentado 5% de juros a cada mês que o valor não for pago

/*function anuidade(mes, valor){
    if(mes > 0 && mes < 13){
       atraso = mes - 1 // indica o mês que foi escolhido com mês de pagamento
        return (valor * ((1 + (5/100))**atraso)).toFixed(2) // indica a porcentagem pelo pagamento atrasado
        } else {
            return 'Mês inválido.'
        }
    }

    console.log(anuidade(2, 200))
*/

/*escreva uma algoritimo que leia o codigo de um aluno e suas 3 notas. calcule a media ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3 mostre o codigo do
aluno, suas 3 notas, a media calculada e uma mensagem aprovado se a media for menor ou igual a 5 reprovado
se a media for menor que 5 repita a operação até que o codigo lido seja negativo*/

/*function aluno(codigo, trimestre1, trimestre2, trimestre3){
    let media = (trimestre1 + trimestre2 + trimestre3) / 3
    
    if(media >= 6){
        console.log('o aluno foi aprovado')
    } else if(media < 6){
        console.log('o aluno foi reprovado')
    } 
    
    switch(codigo){
        case 1:
            return `A primeira nota foi ${trimestre1.toFixed(1)}, 
A segunda nota foi ${trimestre2.toFixed(1)}, 
A terceira nota foi ${trimestre3.toFixed(1)}, 
A média é ${media.toFixed(1)}`
        default: 'não foi possivel ler as notas'
        }        
    }
console.log(aluno(1,7,10,3))

-------------------------------------------------------------------------*/
/*function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b)=> a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1]* 3 + notas[2]*3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123,4.3,2,9)*/

/*let k = 1
while(k < 12){
    console.log(k + ' Hello World')
    k++
}
*/
/*let l = 1
while(l <= 50){
    console.log(l)
    l++
}
*/
/*let i = 1
while(i <= 100){
    if(i % 2 == 0){
        console.log(i)
    }
    i++
}
*/

/*function crescimento(altura1, crescimento1, altura2, crescimento2){
    if(altura1 == altura2){
        if (crescimento1 > crescimento2){
            return 'a criança 1 ultrapassará a crianca 2 em 1 ano.'
        } else if(crescimento1 < crescimento2){
            return 'A crianca 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'As crianças tem igual altura e crescimento.'
        }
     } else {
            if(altura1 > altura2){
                if(crescimento1 >= crescimento2){
                    return 'A criança menor não ultrapassará a maior.'
                } else {
                    return `A criança menor ultrapassará a maior em ${crescimento(altura1, crescimento1, altura2, crescimento2)} anos`
                }
            } else {
                if(crescimento2 >= crescimento1){
                    return 'A criança menor não ultrapassará a maior.'
                    }else{
                        return `A criança menor ultrapassará a maior ${crescimento(altura1, crescimento1, altura2, crescimento2)} anos` 
                    }
                }
            }
        }

        function tempo(alturaMenor, taxaMenorAltura, alturaMaior, taxaMaiorAltura){
            let qtdAnos = 0
            while (alturaMenor < alturaMaior){
                alturaMenor += taxaMenorAltura
                alturaMaior += taxaMaiorAltura
                qtdAnos++
            }
            //console.log(qtdAnos)
            return qtdAnos
        }
    console.log(tempo(150, 2, 130, 4))*/
    
   /* let vetorInteiro = [11, 27, 36, 45]
    let vetorString = ['vampiro', 'múmia', 'frankstein' , 'lobisomen']
    let vetorDouble = [1.5, 0.45, 54.89, 25487.36598]

    function uniao(){
       let vetorUnido = vetorInteiro.concat(vetorString)
       let vetorUnido2 = vetorUnido.concat(vetorDouble)
        console.log(vetorUnido)
        console.log(vetorUnido2)
    }
 uniao()
 -------------------------------------------------------------------------*/

 /*function uniao(vetores){
     let uniaoVetores = vetores
     console.log(uniaoVetores)
 }
 
 vetores = vetorInteiro + vetorString + vetorDouble
 uniao(vetores)
--------------------------------------------------------------------------*/

/*function concatenar(...args){
    resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble, vetorString))
----------------------------------------------------------------------------*/

/*function verificandoString(string1, string2){
    let estaContido = true
    for(let i = 0; i < string1.length; i++){
        let caracteresString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caracteresString2 = string2.charAt(j).toLowerCase()
            if(caracteresString1 == caracteresString2){
                estaContido = true
                break
            } else {
                estaContido = false
            } 
        }
        if(!estaContido){
            return estaContido
        }
    }
    return estaContido
}

console.log(verificandoString('marilia','arimali'))*/

/*let primeiroVetor = [1, 2, 3, 4, 5]
let vetorAdicionado = [6, 7, 8, 9, 10]

function adicionar(vetorAdiciona){    
    for(let i = 0; i < vetorAdiciona.length; i++){
        primeiroVetor.push(vetorAdiciona[i])
         
    }
    return primeiroVetor       
}

console.log(adicionar(vetorAdicionado))*//*
let vetorPilha = [11, 12, 13, 14, 15]
let vetorAdiciona = [16, 17, 18, 19, 20]

function adicionaVetor(vetorInicial, vetorAdicionar){
    for(let i = 0; i < vetorAdicionar.length; i++){
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)
-------------------------------------------------*/
/* crie duas funções que recebam dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 
faça com que a primeira função retorne outro valor que será o resultado da multiplicação de cada elemento
pelo número passado como parâmetro.
a segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5*/
/*let numeros = [2, 3, 15, 0, 1, 25, 1.02]

function multNumero(valoresNumericos, valorInteiro){
    for(let i = 0; i < valoresNumericos.length; i++){    
        let resultado = valoresNumericos[i] * valorInteiro
        console.log(resultado)
    }                    
}
function maiorQ5(valoresNumericos, valorInteiro){
    for(let i = 0; i < valoresNumericos.length; i++){
        let resultado = valoresNumericos[i] * valorInteiro
        if(resultado > 5){
            console.log(resultado)
        }
    }
}
console.log(maiorQ5(numeros, 2))
console.log(multNumero(numeros, 3))*/

/*let vetor = [1, 2, 3, 4, 5]
let vetorResultado = []
function multiplicaVetor(vetor, multiplicador){
    
        vetor.forEach(elemento =>{
            vetorResultado.push(elemento * multiplicador)
        })
        // 
        for(let i = 0; i < vetorResultado.length; i++){
            if(vetorResultado[i] > 5){
                console.log('dentro do if ' + vetorResultado[i])
            }
            
        }
    }           
    
    console.log(multiplicaVetor(vetor, 3))*/
    /* escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
    como parâmetros um número n (número de termo), a1(o primeiro termo) e r(a razão) e a escreva os n termos,
    bem como a soma dos elementos*/
/*let resultado = 0
    function pa(n, a1, r){
        resultado = a1 + (n - 1) * r
        return resultado                 
       }         
console.log(pa(10, 10, 7))
imprime só o resultado final
-----------------------------------------------
/*function pA(n, a1, r){
    for(let i = 0; i < n; i++){
        console.log(a1 + r * i)
    }
    console.log('Soma: ' +(n * (a1 + (a1 + ((n-1) * r))))/2)
}
pA(10, 10, 15)
imprime todos os resultados da pA*/



/*function pg(a1, r, n){
    resultado = r * n**(a1-1) 
    return resultado
}
console.log(pg(10, 5, 7))
imprime somente o ultimo valor da pg*/

/*function pG(n, a1, r){
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1 *(r**i))
    }
    console.log('Soma ' + (a1 * ((r**n)-1)) / (r-1))
}
pG(10, 5, 7)
imprime a soma de todos os valores da pG  */
                     
/*escreva uma função que receba dois parâmetros inicio e fim.essa função deve imprimir todos os números ímpares
que estão entre valores. por padrão os valores devem ser 0 para inicio e 100 para fim. atente para corrigir a
ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

/*function numeros(inicio, fim){
    for(let i = 0; i <= fim; i++ ){
        if(i % 2 == 1){
            console.log(i)            
        }
    }       
}

numeros(0, 10)*/

/*function imprimirImpares(inicio = 0, fim = 20){
    if(inicio > fim){
        inicio = fim + inicio 
        console.log(inicio + ' valor de inicio antes do fim')
        fim = inicio - fim 
        console.log(fim + ' valor de fim depois do fim')
        inicio = inicio - fim 
        console.log(inicio + ' valor de incio depois de tudo')
    }
    for(let i = inicio; i <= fim; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}
imprimirImpares(33, 10)*/

/*crie uma função que receba como parâmetro dois vetores de igual tamanhoe troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente
faça a troca sem utilizar uma variavel auxiliar*/
/*let a = [1, 2, 4, 5, 10]
let b = [15, 22, 34, 45, 100]
function troca(vetorA, vetorB){    
        if(vetorA.length == vetorB.length){
            vetorA = vetorB
            vetorB = a        
        console.log(`vetor "B" ${vetorB} e vetor "A" ${vetorA}`)
    }
}
troca(a, b)
----------------------------------------*/
/*function trocaValores(vetorA, vetorB){
    if(vetorA.length == vetorB.length){
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i] 
            vetorB[i] = vetorA[i] - vetorB[i]  
            vetorA[i] = vetorA[i] - vetorB[i] 
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }
    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}
let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)*/

/*faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo
que de 0.0 a 4.9 seja atribruido o conceito d e de 5.0 a 6.9 seja tribuido o conceito c, e de 7.0 a 8.9 o 
conceito b e de 9 a 10 o conceito a*/

/*function conceito(notas = 0){
    if(notas >= 0 && notas < 5){
        console.log(notas = 'D')
    } else if( notas >=5 && notas <= 7){
        console.log(notas = 'C')
    } else if(notas >=7 && notas <= 9){
        console.log(notas = 'B')
    } else if(notas >=9 || notas == 10){
        console.log(notas = 'A')
    } else {
        console.log('está nota não pode receber avaliação')
    }
}
conceito(4)
conceito(6)
conceito(9.5)
conceito(8.2)
--------------------------------*/
/*function conceitoNotas(notas){
    let conceitos = []
    for(let i = 0; i < notas.length; i++){
        if(notas[i]>= 0 &&  notas[i]<= 4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9){
            conceitos.push('C')
        } else if(notas[i]>=7 && notas[i]<=8.9){
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')
        }
    }
    return conceitos
}
let notas = [10, 13, 9, 2.2, 8.2, 7.7, 6.8]
let vetorConceitos = conceitoNotas(notas)

console.log(vetorConceitos)*/
