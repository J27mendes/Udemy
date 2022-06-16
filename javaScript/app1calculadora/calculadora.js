function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
        //limpar (id, resultado), clicando no c
        document.getElementById('resultado').value = ''
        }
        if(valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.'){
        document.getElementById('resultado').value += valor
        }
        if(valor === '='){
        let calculo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = calculo
        }
    } else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor
    }
}
    