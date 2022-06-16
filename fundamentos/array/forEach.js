const aprovados = ['Jessé', 'Danilo', 'Rafael', 'Juliete', 'zelia']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

const personagens = ['Mirrara', 'Hamurab', 'Thanos', 'Gorun', 'Ziba']

//personagens.forEach(nome => console.log(nome))

const exibirPersonagens = person => console.log(person)
personagens.forEach(exibirPersonagens)
/*
// na função forEach(), o 1º parâmetro são os elementos, o 2º
//é o índice e o 3º é o próprio array 

------------------------------------------------------
forEach2
Array.prototype.forEach2 = function(callback){
for(let i = 0; i < this.length; i++){
    callback(this[i], i, this)
    }
}

const personagens = ['Mirrara', 'Hamurab', 'Thanos', 'Gorun', 'Ziba']

personagens.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})*/

