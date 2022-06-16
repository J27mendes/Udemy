import Link from "next/link"
import styles from "../styles/Layout.module.css"

export default function Layout(props){
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h2>{props.titulo ?? 'Módulos'}</h2>
                <Link href="/">
                    <a>Voltar</a>
                </Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>            
        </div>
    )
}