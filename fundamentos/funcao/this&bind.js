/*const pessoa = {
    saudacao: 'Bom dia',
    Falar(){
        console.log(this.saudacao)
    }
}

pessoa.Falar() 

const falar = pessoa.falar
falar()//conflito entre paradigmas:funcional// e orientação a objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()*/

//metodo bind serve para resolver o this quando ele não for encontrado, armazenando em uma variável

/*function pessoa(){
    this.idade = 
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 10000)
}

new pessoa
*/

/*function pessoa(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 10000)
}
new pessoa
*/

/*function pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },10000)
}

new pessoa*/

