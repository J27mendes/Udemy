function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function barreira(reversa = false){
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px `
}

/*const b = new barreira(true)
b.setAltura(200)
document.querySelector('[wm-flappy').appendChild(b.elemento)*/

function parDeBarreiras(altura, abertura, x){
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new barreira(true)
    this.inferior = new barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random()  * (altura - abertura)
        const alturaInferior = (altura - abertura) - alturaSuperior

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth
    
    this.sortearAbertura()
    this.setX(x)
}

/*const teste = new parDeBarreiras(700, 400, 600)
document.querySelector('[wm-flappy]').appendChild(teste.elemento)*/

function barreiras(altura, largura, abertura, espaco, pontos){
    this.pares = [
        new parDeBarreiras(altura, abertura, largura),
        new parDeBarreiras(altura, abertura, largura + espaco),
        new parDeBarreiras(altura, abertura, largura + espaco * 2),
        new parDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 2
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //quando o elemento sair da área do jogo
            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const passouDoMeio = par.getX() + deslocamento >= meio
            && par.getX() < meio
            if(passouDoMeio) pontos()
        })
    }
}

/*
const barreiras = new Barreiras(700, 1200, 200, 400)
consr areaDoJogo = document.querySelector('[wm-flappy]')
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
},20)
*/

function passaro(alturaJogo) {
    let voando = false
    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 6 : -2)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if(novoY <= 0) {
            this.setY(0)
        } else if(novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}

function progresso(){
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontuacao => {
        this.elemento.innerHTML = pontuacao
    }
    this.atualizarPontos(0)
}

/*function inicio(){
    this.elemento = novoElemento('button', 'start')
    this.elemento.innerHTML = 'Start'

       
}*/
/*const colunas = new barreiras(700, 1200, 400, 300)
const bicho = new passaro(526)
const areaDoJogo = document.querySelector('[wm-flappy]')
areaDoJogo.appendChild(bicho.elemento)
areaDoJogo.appendChild(new progresso().elemento)
colunas.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
   colunas.animar()
   bicho.animar() 
}, 20);
*/

function sobrepostos(elementoX, elementoY) {
    const x = elementoX.getBoundingClientRect()
    const y = elementoY.getBoundingClientRect()

    const horizontal = x.left + x.width >= y.left && y.left + y.width >= x.left
    const vertical = x.top + x.height >= y.top && y.top + y.height >= x.top

    return horizontal && vertical
}

function colidiu(passaro, barreiras){
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if(!colidiu){
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = sobrepostos(passaro.elemento, superior)
                || sobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

     
    function flappyBird() {
    let pontuacao = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth
    
    const andamento = new progresso()
    const obstaculo = new barreiras(altura, largura, 200, 400,
        () => andamento.atualizarPontos(++pontuacao))
    const bicho = new passaro(altura)
    //const iniciar = new inicio()
    
       
    areaDoJogo.appendChild(andamento.elemento)
    areaDoJogo.appendChild(bicho.elemento)
    obstaculo.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    
    //areaDoJogo.appendChild(iniciar.elemento)

               
    
        this.start = () => {
            // loop do jogo
                const temporizador = setInterval(() => {               
                obstaculo.animar()
                bicho.animar()                                          
                if(colidiu(bicho, obstaculo))
                    clearInterval(temporizador)
                                                     
            }, 20);
           
        }
    }
                  
    new flappyBird().start()
//////////////////////////////////////////////////////////////////////////////////
    /*function inicio(){
        const botao = document.querySelector('.start')

    for(let i = 0; i <= botao.length; i++){
            if(botao.onclick >=1){
             
                       
        }
    }*/
        //botao.onclick 
        // = () => {this.elemento.innerHTML = 'Pause'}
    //}
    /*function clicou(e){
        
        console.log('saindo em 5 segundos...')
        setTimeout(() => {
            const link = e.target // <- este é o link para acessar a página
            window.location.href  <- esta é a própria pagina na web = link.href
          /*  console.log('saindo agora')
        }, 5000)
    } 
    */
    const clicou = document.querySelector('.start')
    clicou.onclick = function inicio(){
        
        new flappyBird().start()
        clicou.innerHTML = 'Pause'
        if(clicou.innerHTML == 'Pause'){       
            
        }
    }
   // const a = document.getElementsByClassName('start')
   //a.onclick = clicou
