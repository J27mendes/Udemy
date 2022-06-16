let altura = 0
let largura = 0
let vidas = 1
let tempo = 30
let tempoMosquito = 2500

//alert(window.location.href) buscando a string depois do ponto de ?
let nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel === 'facil'){
    tempoMosquito = 2500
} else if(nivel === 'medio'){
    tempoMosquito = 1700
} else if(nivel === 'dificil'){
    tempoMosquito = 1200
} else if(nivel === 'goku'){
    tempoMosquito = 700
} else if(nivel === 'automatico'){
    tempoMosquito = 2200
}


    /*let sorteio = Math.floor(Math.random() * 3)

    if(sorteio == 0){
        tempoMosquito = 2000
    } else if(sorteio == 1){
        tempoMosquito = 1500
    } else if(sorteio == 2){
        tempoMosquito = 1000
    }*/

      // fazer aqui o jogo passar por cada nivel


function ajustaDisplayJogo(){
    largura = window.innerWidth
    altura = window.innerHeight   

    //console.log(largura, altura)
}
ajustaDisplayJogo()

// tempo de jogo
let cronometro = setInterval( function () { 
    //se o tempo chegar a 0 paramos o tempo jogo
    //e encerra a criação de mosquitos na tela
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criacaoMosquito)
        window.location.href = 'inicio.html'
        //alert('vitoria')
        //quando o jogador vence a partida ele é forçado para a pagina inicial
        //vitória     
        } else {
        //responsavel por colocar o cronometro na tela
        document.getElementById('cronometro').innerHTML = tempo
    }
    tempo -= 1
}, 1000)

/*function automatico(){
    let automatico = window.location.search
    automatico = automatico.replace('?', '')

    

    document.getElementById('automatico') =  automatico
    

    
}
 */    

function posicaoMosquito(){
    //remover o elemento de id mosquito da tela "caso ele exista"
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 5){
            //parar o jogo se as vidas acabarem
            window.location.href = 'fimJogo.html'
        } else {
            //responsavel por mudar a imagem do coração
            document.getElementById('vida' + vidas).src = "imagens/coracao_vazio.png"
            //console.log('o elemento foi vida' + vidas)
            vidas++
        }
    }

    
    //sortear a posição que o elemento vai ficar na tela
    let posicaoLargura = Math.floor(Math.random() * largura) - 170
    let posicaoAltura = Math.floor(Math.random() * altura) - 170
    
    //fazer um controle para o elemento não ficar fora da tela se sorteado como 0
    posicaoLargura = posicaoLargura < 0 ? 0 : posicaoLargura
    posicaoAltura = posicaoAltura < 0 ? 0 : posicaoAltura

    //console.log(posicaoLargura ,posicaoAltura)

    //criar o elemento html
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = (ladoAleatorio()) + ' ' + (tamanhoAleatorio())
    mosquito.style.left = posicaoLargura + 'px'
    mosquito.style.top = posicaoAltura + 'px'
    mosquito.style.position = 'absolute' 
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }


    document.body.appendChild(mosquito)
    //console.log(tamanhoAleatorio())
    //console.log(ladoAleatorio())
}

//sorteia tamanho do mosquito
function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 4)
    //console.log(classe)

    if(nivel === 'facil'){
        classe = Math.floor(Math.random() * 2)
        switch(classe) {
            case 0: 
            return 'mosquitoMedio'
            case 1:
            return 'mosquitoGrande'
        }
    } else if(nivel === 'medio'){
        classe = Math.floor(Math.random() * 3)
            switch(classe){
                case 0:
                    return 'mosquitoNormal'
                case 1:
                    return 'mosquitoMedio'
                case 2:
                    return 'mosquitoGrande'
        }
    } else if(nivel === 'dificil'){
        classe = Math.floor(Math.random() * 3)
            switch(classe){
                case 0:
                    return 'mosquitoPequeno'
                case 1:
                    return 'mosquitoNormal'
                case 2:
                    return 'mosquitoMedio'
        }
    } else if(nivel === 'goku'){
        classe = Math.floor(Math.random() * 1)
            switch(classe){
                case 0:
                    return 'mosquitoPequeno'
        }
    } else if(nivel === 'automatico'){
        classe = Math.floor(Math.random() * 2)
            switch(classe) {
                case 0: 
                return 'mosquitoMedio'
                case 1:
                return 'mosquitoGrande'
        }
    }

    
    /*switch(classe) {
        case 0:
            return 'mosquitoPequeno'
        case 1:
            return 'mosquitoNormal'
        case 2:
            return 'mosquitoMedio'
        case 3:
            return 'mosquitoGrande'        
    }*/
}

//sorteia o lado que o mosquito vai se posicionar
function ladoAleatorio(){
    let lado = Math.floor(Math.random() * 2)
    
    switch(lado) {
        case 0:
            return 'ladoEsquerdo'
        case 1:
            return 'ladoDireito'        
    }
}

//cria o elemento na tela de 2s em 2s.
let criacaoMosquito = setInterval(function() {   
    posicaoMosquito()
}, tempoMosquito)
     