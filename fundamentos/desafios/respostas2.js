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
            return'a criança 1 ultrapassará a crianca 2 em 1 ano.'
        } else if(crescimento1 < crescimento2){
            return 'A crianca 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'As crianças tem igual altura e crescimento.'
        }
     } else {

            if(altura1 > altura2){
                if(crescimento1 >= crescimento2){
                    return'A criança menor não ultrapassará a maior.'
                } else {
                    return`A criança menor ultrapassará a maior em ${tempo(altura1, crescimento1, altura2, crescimento2)} anos`
                }
            } else {
                if(crescimento2 >= crescimento1){
                    return 'A criança menor não ultrapassará a maior.'
                    } else {
                        return `A criança menor ultrapassará a maior ${tempo(altura1, crescimento1, altura2, crescimento2)} anos` 
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
    console.log(tempo(100, 50, 150, 15))*/

    /*let numeros = [1, 3, 5, 8, 45, 69, 25, 17, 4, 20, 35]
    let numeroPar = []
    let numeroImpar = [] 
    function buscar(){
         
        for(let i = 0; i <= numeros.length; i++){
            if(numeros[i] % 2 == 0 ){
                numeroPar.push(numeros[i])                                               
            } else if(numeros[i] % 2 == 1) { 
                numeroImpar.push(numeros[i])
            }
        }
        console.log(numeroPar)
        console.log(numeroPar.length + ' É a Quantidade de numeros pares')
        console.log(numeroImpar)
        console.log(numeroImpar.length + ' É a Quantidade de numeros impares') 
    }
    buscar()*/
    /*function paresImpares(vetorNumeros){
        let qtdPares = 0
        let qtdImpares = 0
        for(let i = 0; i < vetorNumeros.length; i++){
            if(vetorNumeros[i] % 2 == 0){
                qtdPares++
            } else {
                qtdImpares++
            }
        }
        console.log(`${qtdPares} números pares e ${qtdImpares} números impares.`)
    }
    vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13]
    paresImpares(vetor) */
    /*---------------------------------------------------------------------------------*/

    /*function observarIntervalo(vetor){
        let qtdNumerosNoIntervalo = 0
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i] >= 10 && vetor[i] <= 18){
                qtdNumerosNoIntervalo++
            }
        }
        return `${qtdNumerosNoIntervalo} números dentro do intervalo.`
    } 

    saida = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21, 25]
    console.log(observarIntervalo(saida))
*/

/*let vetor = [18, 22, 44, 42, 36, 12, 4, 69, 84, 27, 40]
newVetor = []
function percorrer(a, b){            
            return a - b            
    }

newVetor = vetor.sort(percorrer)
console.log(newVetor)
console.log(newVetor.length)
console.log(newVetor[0])
console.log(newVetor[10])*/
/*-----------------------------------------------------------------------------------------------------------*/
/*function maiorMenor(vetor){
    let maior
    let menor
    for(let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if(vetor[i] > maior){
                maior = vetor[i]
            } if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [menor, maior]
}
vetor = [16, 22, 44, 42 ,36, 12, 4, 69, 84, 27 , 40]
console.log(maiorMenor(vetor))*/

/*function numerosNegativos(vetor){
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
console.log(numerosNegativos(vetor))*/

/*function mediaVetor(vetor){
    let soma = 0
    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 6, 8]
console.log(mediaVetor(vetor))*/

