import estilo from '../styles/Estilo.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estilo(){
    return (
        <Layout titulo="Cabeçalho em Módulos">
            <div className={estilo.corBase}>
                <h2>Testando as cores, sorte ou aprendizado</h2>
            </div>
        </Layout>
        
    )
}