const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDados = require('./bancoDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDados.getProdutos())
})

app.get('./produtos/:id', (req, res, next) => {
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        cor: req.body.cor
    })
    res.send(produto)//retorna um JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
        cor: req.body.cor
    })
    res.send(produto)//JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.excluirProduto(req.params.id)
    res.send(produto)//JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
}) 

//Fazendo o CRUD, as quatro operações básicas do banco de dados
//create,
//read,
//update,
//delete
//web service do tipo rest
