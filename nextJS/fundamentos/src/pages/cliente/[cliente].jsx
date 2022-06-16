import Layout from "../../components/Layout";
import { useRouter } from 'next/router';
import estilo from "../../styles/Estilo.module.css"

export default function ClienteCodigo(){
    const router = useRouter()
 
    return (
        <Layout titulo="Navegação Dinâmica">
            <span className={estilo.lista}>cliente = {router.query.cliente}</span>
        </Layout>
    )
}