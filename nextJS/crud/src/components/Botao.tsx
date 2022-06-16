interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' | 'purple' | 'red'
    className?: string
    children: any
    onClick?: () => void
    
}

export default function Botao(props: BotaoProps){
    return (
        <button  onClick={props.onClick} className={`bg-gradient-to-r  from-blue-400 to-purple-700
        text-white font-bold px-4 py-2 rounded-md ${props.className}
        `
        }>{props.children}
        </button>
    )
}