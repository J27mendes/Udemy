/*const sequencia = {
    _valor: 1, // convenção que diz que quando usar o underline antes do 
    //atributo, diz que ele deve ser acessado somente dentro do objeto.
    get valor(){ return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 500
console.log(sequencia.valor, sequencia.valor)
//o o if no set faz ignorar o valor que foi atribuido
// e retorna o get*/