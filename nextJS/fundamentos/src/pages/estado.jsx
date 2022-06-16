import { useState } from "react";
import Layout from "../components/Layout";
import styles from '../styles/Navegador.module.css'
import estilo from '../styles/Layout.module.css'


export default function Estado(){
    const [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(numero + 1)
    }
    return (
        <Layout titulo="Componente com Estado">
            <div className={estilo.numero}>{numero}</div>
            <button onClick={incrementar} className={styles.navegador}>Incrementando</button>                
        </Layout>
    )
}