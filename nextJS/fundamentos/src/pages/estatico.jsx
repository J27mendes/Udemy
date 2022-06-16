import Layout from "../components/Layout"
import estilo from '../styles/Estilo.module.css'

export function getStaticProps(){
    return {
        props: {
            numero: Math.random().toFixed(3)

        }
    }
}
//para gerar uma página estatica é preciso rodar o comando npm run build 
//primeiro fazendo o build da aplicação
//e depois rodando em modo de produção
//e depois npm start 

export default function Estatico(props){
    
    return (
        <Layout titulo="Conteúdo Estático">
            <div className={estilo.lista}>{props.numero}</div>
        </Layout>

    )
}