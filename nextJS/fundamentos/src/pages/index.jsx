import Link from 'next/link'
import Navegador from '../components/Navegador'
import estilo from '../styles/Estilo.module.css'

export default function Iniciar() {
    const inicio = <h1 className={estilo.estiloInicio}>"Um pouquinho de sorte e estilo, pfv!!!"</h1> 
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto={inicio} destino="/estilo" cor="#ccddff"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#ffaaaa"/>
            <Navegador texto="JSX" destino="/jsx" />
            <Navegador texto="Navegação" destino="/navegacao" cor="grey"/>
            <Navegador texto="Cliente" destino="/cliente/123" cor="green"/>
            <Navegador texto="Estado" destino="/estado" cor="red"/>
            <Navegador texto="Integração" destino="/integracao" cor="yellow"/>
            <Navegador texto="Estatico" destino="/estatico" cor="#d89128"/>
        </div>        
    )
}