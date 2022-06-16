//coleção dinâmica de pares chave/valor
/*const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 228
console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)*/

/*const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
// quando tentamos acessar um atributo que não existe o javascript retorna undefined
console.log(carro.condutores.length)
// se tentarmos acessar o tamanho de algo que está undefined o javascript retorna um erro.*/