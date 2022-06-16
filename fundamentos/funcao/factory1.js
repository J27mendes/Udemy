//função simples... factory sempre retorna um objeto
/*function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())*/
//factory2
function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1 
    }
}

console.log(criarProduto('Notebook', 2100.52))
console.log(criarProduto('iPad', 1258.89))