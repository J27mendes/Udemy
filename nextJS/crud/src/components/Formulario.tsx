import { useState } from "react";
import Entrada from "./Entrada";
import Botao from "./Botao";
import Cliente from "../core/Cliente"

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    const id= props.cliente?.id 
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada 
                somenteLeitura
                texto="Código" valor={id}
                className="mb-4" />
            ): false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-2"/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} className="mb-2"/>

            <div className="flex justify-end mt-7">
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}className={`bg-gradient-to-r from-green-400 to-green-600 mr-2`}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} className={`bg-gradient-to-r from-red-600 to-red-800`}>
                    Cancelar
                </Botao>
            </div>
        </div>        
    )
}