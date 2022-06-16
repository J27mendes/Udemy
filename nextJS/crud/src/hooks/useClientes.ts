import ClienteRepositorio from "../core/clienteRepositorio"
import ColecaoCliente from "../firebase/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import useTabelaForm from "./useTabelaForm"
import { useEffect, useState } from "react"

export default function useClientes(){
  
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    
    useEffect(obterTodos, [])

    function obterTodos(){
        repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
        })
    }
    
    async function salvarCliente(cliente: Cliente){
        await repo.salvar(cliente)
        obterTodos()
    }

    function selecionarCliente(cliente: Cliente){
        setCliente(cliente) 
        exibirFormulario()   
    }

    function novoCliente(){
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente){
        await repo.excluir(cliente)
        obterTodos()        
    }

  return {
      cliente,
      clientes,
      novoCliente,
      salvarCliente,
      excluirCliente,
      selecionarCliente,
      obterTodos,
      tabelaVisivel,
      exibirTabela
  }

}