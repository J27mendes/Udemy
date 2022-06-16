import Layout from "../components/Layout"

export default function Jsx(){
    const titulo = <h1>Jsx é um conceito central</h1>

    function subtitulo() {
        return <h2>{"A sorte deve continuar".toUpperCase()}</h2>        
    }

    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({nome: 'Flávia', idade: 30})}
                </p>
            </div>
        </Layout>
    )
}



