import Layout from "../components/Layout";
import { useState } from 'react'
import estilo from "../styles/Layout.module.css"
import styles from "../styles/Navegador.module.css"
import css from "../styles/Estilo.module.css"

export default function Integracao(){

    const [cliente, setCliente] = useState({})
    const [codigo, setCodigo] = useState(1)

    async function obterCliente(){
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)


        //fetch(`http://localhost:3000/api/clientes/${codigo}`)
        //    .then(resp => resp.json())
        //    .then(dados => setCliente(dados))
    } 

    return (
        <Layout>
            <div>
                <input className={estilo.numero} type="number" value={codigo} 
                onChange={e => setCodigo(e.target.value)}/>
                <button className={styles.navegador} onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul className={css.lista}>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}