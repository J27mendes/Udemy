import Layout from "../components/Layout";
import Cabecalho from "../components/cabecalho";

export default function Exemplo(){
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprendendo Next na prática"/>
            <Cabecalho titulo="Sorte pra mim, porque nunca é demais"/>
        </Layout>
    )
}


